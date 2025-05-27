import logo from "../../images/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";



const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);

  
  return (
    <div className="h-24 bg-sky-200 flex justify-between items-center">
      <div>
        <img className="h-20 " src={logo} alt=" logo"></img>
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/" className="no-decoration">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="no-decoration">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-decoration">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="no-decoration">
            <img src="https://i.ibb.co/xKj38WJM/cart.png" className="h-10 relative"/>
            <span className="absolute top-6 right-20 bg-green-500 px-1 rounded-[50%] text-sm">{cart.length}</span>
            </Link>
          </li>
          <button
            className="mr-4"
            onClick={() => {
              navigate("/login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
