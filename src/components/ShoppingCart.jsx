import React, { useState } from 'react';
import { useProduct } from './ProductContext';

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useProduct();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace('$', '')) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateShipping = () => 10.0;

  const calculateTax = () => (calculateTotal() * 0.08).toFixed(2);

  const calculateOrderTotal = () =>
    (
      parseFloat(calculateTotal()) +
      calculateShipping() +
      parseFloat(calculateTax())
    ).toFixed(2);

  const handleCheckout = () => {
    console.log('Order placed with the following details:');
    console.log('Total:', calculateOrderTotal());
    setOrderPlaced(true);
  };

  const handleRemoveClick = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const handleClose = () => {
    cart.forEach(item => removeFromCart(item.id));
    setOrderPlaced(false);
  };

  return (
    <div className="container mx-auto px-4 my-16">
      <section
        className="relative w-full  h-96 bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage:
            'url("https://zippypixels.com/wp-content/uploads/2018/03/Smart-object-of-shirt.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-xl text-white uppercase mb-2 tracking-widest">
            Your Cart
          </h2>
          <h1 className="text-5xl text-white font-bold mb-4">
            Review & Checkout
          </h1>
          <p className="text-white text-center w-3/4">
            Ensure your cart items are correct before placing your order.
          </p>
        </div>
      </section>

      {/* Order Summary Section */}
      <section className="mt-16">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">
              Your cart is currently empty.
            </p>
          ) : (
            <>
              <ul className="mb-6">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row items-center border-b py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg mr-0 md:mr-4 mb-4 md:mb-0"
                    />
                    <div className="flex-grow flex flex-col md:flex-row justify-between items-center w-full">
                      <div className="text-center md:text-left">
                        <span className="text-lg font-medium">{item.name}</span>
                        <span className="text-lg font-medium block">
                          {item.price}
                        </span>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              Math.max(item.quantity - 1, 1)
                            )
                          }
                          className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                        >
                          -
                        </button>
                        <span className="text-lg font-medium mx-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
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
                <span className="font-semibold">Tax (8%):</span>
                <span>${calculateTax()}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-xl font-semibold mb-6">
                <span>Total:</span>
                <span>${calculateOrderTotal()}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </section>

      {/* Confirmation Card */}
      {orderPlaced && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-lg mb-6">Thank you for your purchase.</p>
            <button
              onClick={handleClose}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
