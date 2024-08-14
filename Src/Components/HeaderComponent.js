import {LOGO_URL} from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const HeaderComponent = () => {

  const [btnName , setBtnName]=useState("Login 🟢");
  const onlineStatus = useOnlineStatus();

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
          <li>
            <Link className="link-style" to="/InstaDelivery">InstaDelivery</Link>
          </li>
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
            <li>{ onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
