const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
const dbConfig = require("./config/db");
app.use(express.json());
const userRoute = require("./routes/index");
const songsRoute = require("./routes/index");
const adminRoute = require("./routes/index");
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
app.use("/api/users", userRoute);
app.use("/api/songs", songsRoute);
app.use("/api/admin", adminRoute);
const port = 5000;
app.listen(port, () => console.log(`node js server started at port ${port}!`));
