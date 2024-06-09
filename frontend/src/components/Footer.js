import React from "react";
// import "./Style.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-200 ">
      <div className="container mx-auto p-4 flex justify-center items-center">
        <Logo w={200} h={100} />
      </div>
    </footer>
  );
};

export default Footer;
