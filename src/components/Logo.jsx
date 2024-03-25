import React from "react";
import "../App.css";
import logoFreecodecamp from "../images/freecodecamp-logo.png";

function Logo() {
    return (
        <div className="logo-freecodecamp-container">
        <img
          src={logoFreecodecamp}
          className="freecodecamp-logo"
          alt="logo-freecodecamp"
        />
      </div>
    );
}



export default Logo;