import React, { useState } from 'react';
import { useProduct } from './ProductContext';

const ProductList = () => {
  const { cart, addToCart } = useProduct();
  const [notification, setNotification] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Watches',
      price: '$139.99',
      image: 'https://images7.alphacoders.com/349/thumb-1920-349431.jpg',
    },
   
    {
      id: 2,
      name: 'Casual T-Shirt',
      price: '$29.99',
      image: 'https://www.careyfashion.com/wp-content/uploads/2016/12/mens-tshirts-6.jpg',
    },
    {
      id: 3,
      name: 'Jeans',
      price: '$49.99',
      image: 'https://denimshine.com/wp-content/uploads/2021/08/eduardo-pastor-3oejsU5OQVk-unsplash-scaled.jpg',
    },
    {
      id: 4,
      name: 'Summer Dress',
      price: '$79.99',
      image: 'https://www.stylevore.com/wp-content/uploads/2022/08/AndreasCollections-15166131984642183.jpg',
    },
    {
      id: 5,
      name: 'Sneakers',
      price: '$59.99',
      image: 'https://cdnc.lystit.com/1200/630/tr/photos/cettire/0da60d28/gucci-White-Logo-Tongue-Out-Print-Sneakers.jpeg',
    },
    {
      id: 6,
      name: 'Leather Handbag',
      price: '$199.99',
      image: 'https://originalireland.ie/wp-content/uploads/2019/11/IMG_0253.jpg',
    },
   
    {
      id: 7,
      name: 'Sweater',
      price: '$89.99',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71KuXHK7MVL._AC_UL1500_.jpg',
    },
    {
      id: 8,
      name: 'Stylish Jacket',
      price: '$92.99',
      image: 'https://cdn.luxe.digital/media/2019/09/12083549/best-red-bomber-jacket-men-sandbank-luxury-style-luxe-digital.jpg',
    },
    {
      id: 9,
      name: 'Hoodie',
      price: '$99.99',
      image: 'https://berkeleytechltd.com/product-category/carhartt-mens-rain-defender-paxton-heavyweight-hooded-zip-front-sweatshirt-peat/91UJYI8HGmL._AC_UL1500_.jpg',
    },
  ];

  const isInCart = (id) => cart.some(item => item.id === id);

  const handleAddClick = (product) => {
    if (isInCart(product.id)) {
      alert('You cannot add this item again.');
    } else {
      addToCart({ ...product, quantity: 1 });
      setNotification(`${product.name} has been added to your cart!`);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 my-16">

      <section
        className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage:
            'url("https://zippypixels.com/wp-content/uploads/2018/03/Smart-object-of-shirt.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-xl text-white uppercase mb-2 tracking-widest">
            Trendy Wear
          </h2>
          <h1 className="text-5xl text-white font-bold mb-4">
            Discover our exclusive products
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center mb-8">Explore Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover object-top rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-lg mt-2">{product.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleAddClick(product)}
                aria-label={`Add ${product.name} to cart`}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg transition-opacity duration-500">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ProductList;
