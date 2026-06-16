import React from "react";
import "../styles/Navbar.css";
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
// use navigate
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick ={ () => navigate("/")} >
        <span className="logo-icon">
          <img
            src="https://images.seeklogo.com/logo-png/35/1/myntra-logo-png_seeklogo-355038.png"
            width="60"
            alt=""
          />
        </span>
      </div>
      <ul className="navbar-links">
        <li className="men"  >
          <a href="" onClick={() => navigate("/mens")}>
            MEN
          </a>
        </li>
        <li className="women">
          <a href="" onClick={() => navigate("/womens")}>
            WOMENS
          </a>
        </li>
        <li className="kids">
          <a href="" onClick={() => navigate("/kids")}>
            KIDS
          </a>
        </li>
        <li className="home">
          <a href="" onClick={() => navigate("/")}>
            HOME
          </a>
        </li>
        <li className="beauty">
          <a href="" onClick={() => navigate("/beauty")}>
            BEAUTY
          </a>
        </li>
        <li className="genz">
          <a href="" onClick={() => navigate("/genz")}>
            GENZ
          </a>
        </li>
      </ul>


      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search products"
        />
      </div>
      <div className="menu-container">

        {/* Admin */}
        {isLoggedIn && (
          <div className="menu-item" onClick={() => navigate("/admin/product-create")}>
            <FaRegUser className="icon" />
            <span>Admin</span>
          </div>
        )}

       
        < div className="menu-item" onClick={() => navigate( isLoggedIn ? "/profile" : "/login")}>
          <FaRegUser className="icon" />
          <span>{isLoggedIn ? "Profile" : "Login"}</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/wishlist")}>
          <FaRegHeart className="icon" />
          <span>Wishlist</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/cart")}>
          <FaShoppingBag className="icon" />
          <span>Bag</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
