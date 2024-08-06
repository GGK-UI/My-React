import {LOGO_URL} from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li>
            <Link className="link-style" to="/">Home</Link>
          </li>
          <li>
            <Link className="link-style" to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link className="link-style" to="/contactUs">Contact Us</Link>
          </li>
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
