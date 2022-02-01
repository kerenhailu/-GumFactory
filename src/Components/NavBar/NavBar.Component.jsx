import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>NavBar</h1>
      <nav>
        <Link to="/Home">
          <button>Home</button>
        </Link>
        <Link to="/Order">
          <button>Order</button>
        </Link>
        <Link to="/Product">
          <button>Product</button>
        </Link>
        <Link to="/CreateOrder">
          <button>CreateOrder</button>
        </Link>
        <Link to="/Contact">
          <button>Contact</button>
        </Link>
      </nav>
    </div>
  );
};
export default NavBar;
