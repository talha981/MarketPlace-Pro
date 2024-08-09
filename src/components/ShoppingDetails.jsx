import React from 'react';
import { useProduct } from './ProductContext';

const ShoppingDetails = () => {
  const { cart, removeFromCart, setCart } = useProduct();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  const calculateShipping = () => 10.00;

  const calculateTax = () => (calculateTotal() * 0.08).toFixed(2);

  const calculateOrderTotal = () => (parseFloat(calculateTotal()) + calculateShipping() + parseFloat(calculateTax())).toFixed(2);

  const handleCheckout = () => {
    console.log('Order placed with the following details:');
    console.log('Total:', calculateOrderTotal());
  };

  const handleRemoveClick = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  return (
    <div className="container mx-auto px-4 my-16">
      <h1 className="text-4xl font-bold text-center mb-12">Checkout</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        <ul className="mb-6">
          {cart.map(item => (
            <li key={item.id} className="flex items-center border-b py-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow flex justify-between items-center">
                <div className="flex-grow">
                  <span className="text-lg font-medium">{item.name}</span>
                  <span className="text-lg font-medium block">{item.price}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveClick(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal:</span>
          <span>${calculateTotal()}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Shipping:</span>
          <span>${calculateShipping().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Tax:</span>
          <span>${calculateTax()}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-semibold mb-6">
          <span>Total:</span>
          <span>${calculateOrderTotal()}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ShoppingDetails;
