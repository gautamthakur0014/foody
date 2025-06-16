import logo from "../../images/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-sky-200 shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img className="h-12 md:h-20 " src={logo} alt=" logo"></img>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 items-center text-sm">
        <li>
          <Link to="/" className="no-underline text-xl font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="no-underline text-xl font-semibold">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="no-underline text-xl font-semibold">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/cart" className="no-underline font-semibold text-xl">
            <img
              src="https://i.ibb.co/xKj38WJM/cart.png"
              className="h-10 relative"
            />
            <span className="absolute top-6 right-20 bg-green-500 px-1 rounded-[50%] text-sm">
              {cart.length}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/login" className="no-underline font-semibold text-xl">
            Login
          </Link>
        </li>
      </ul>

      {/* Mobile Nav (Logo + Cart + Hamburger) */}
      <div className="md:hidden flex items-center space-x-4">
        <Link to="/cart">
          <img
            src="https://i.ibb.co/xKj38WJM/cart.png"
            className="h-10 relative"
          />
          <span className="absolute top-2 right-11 bg-green-500 px-1 rounded-[50%] text-sm">
            {cart.length}
          </span>
        </Link>
        <button
          className="font-bold text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰ {/* Hamburger Icon */}
        </button>
      </div>

      {/* Side Drawer Overlay */}
      <div
        className={`fixed top-0 left-0 h-full bg-sky-100 w-[70%] z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 text-lg">
          <li>
            <Link
              to="/"
              className="no-underline text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="no-underline text-xl"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="no-underline text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="no-underline text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Optional Overlay Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Header;
