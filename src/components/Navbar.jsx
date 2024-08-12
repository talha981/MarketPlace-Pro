import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

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

      {/* Login/Signup or Logout */}
      <div className="flex space-x-4">
        {isAuthenticated ? (
          <>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
