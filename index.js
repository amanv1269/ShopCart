const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Serve static files
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

// Routes
app.use("/api", router);

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 8080;

// Lambda handler function
exports.handler = async (event, context) => {
  // Ensure DB connection
  await connectDB();

  // Proxy the event to Express server
  const response = await new Promise((resolve, reject) => {
    app(event, {
      // Dummy context
      succeed: resolve,
      fail: reject
    });
  });

  return response;
};
