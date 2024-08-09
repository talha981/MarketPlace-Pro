import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { ProductProvider } from './components/ProductContext'; // Import ProductProvider
import ShoppingDetails from './components/ShoppingDetails';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="products" element={<ProductList />} />
          <Route exact path="shopping-cart" element={<ShoppingCart />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
          {/* <Route exact path="signup" element={<ShoppingDetails/>} /> */}
          
          <Route exact path="user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
