import React from "react";
import "./Logo.css";
import logo from "./logo5.png"; // Tell webpack this JS file uses this image

function Logo() {
  return (  
    <div className="logo" >
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
