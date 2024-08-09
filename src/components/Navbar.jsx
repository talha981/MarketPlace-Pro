import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Shop Name */}
      <div className="text-2xl font-bold">
        <Link to="/">ShopName</Link>
      </div>

      {/* Centered Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/products">Product List</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
        <Link to="/user-profile">User Profile</Link>
        <Link to="/checkout">Checkout</Link>
      </div>

      {/* Login and Signup */}
      <div className="flex space-x-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
