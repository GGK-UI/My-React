import {LOGO_URL} from "../Utils/constants";
import { useState } from "react";

const HeaderComponent = () => {

  const [btnName , setBtnName]=useState("Login 🟢");

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="log-button" 
          onClick={() => { 
            btnName === "Login 🟢" 
            ? setBtnName("Logout 🔴") 
            : setBtnName("Login 🟢");
            console.log(btnName)
          }}
          >
            {btnName}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
