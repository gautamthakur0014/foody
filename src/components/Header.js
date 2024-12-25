import logo from "../../images/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName]=useState("login")
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt=" logo"></img>
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>contact</li>
          <li>about us</li>
          <li>cart</li>
          <button className="login" onClick={()=>{setbtnName(btnName=="login"?"logout":"login")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
