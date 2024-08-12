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
import { AuthProvide } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <AuthProvide>

      <ProductProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            {/* <Route exact path="signup" element={<ShoppingDetails/>} /> */}


            <Route path="/shopping-cart" element={
              <ProtectedRoute>
                <ShoppingCart />
              </ProtectedRoute>
            } />
          <Route exact path="/user-profile" element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } />
          
          </Routes>

        </Router>
      </ProductProvider>
    </AuthProvide>
  );
}

export default App;
