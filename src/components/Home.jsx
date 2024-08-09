import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://zippypixels.com/wp-content/uploads/2018/03/Smart-object-of-shirt.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Welcome to Trendy Wear</h1>
            <p className="text-xl mb-8">Discover the latest fashion trends and styles</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <img src="https://welpmagazine.com/wp-content/uploads/2020/10/158.jpeg" alt="Men's Fashion" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white text-2xl font-semibold">Men's Fashion</h3>
            </div>
          </div>
          <div className="relative">
            <img src="https://agentestudio.com/uploads/post/image/91/main_fashion-website-design-cover.jpg" alt="Women's Fashion" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white text-2xl font-semibold">Women's Fashion</h3>
            </div>
          </div>
          <div className="relative">
            <img src="https://tse3.mm.bing.net/th?id=OIP.ORH_mwC_R1rP2xGViNy_lwHaE8&pid=Api&P=0&h=220" alt="Accessories" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white text-2xl font-semibold">Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <img src="https://usatrippers.com/wp-content/uploads/2022/08/Essential-Clothes.jpg" alt="Best Seller 1" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white text-2xl font-semibold">Best Seller 1</h3>
            </div>
          </div>
          <div className="relative">
            <img src="https://i.pinimg.com/originals/60/b0/a4/60b0a4ee7e032a6281444a82705a665c.jpg" alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white text-2xl font-semibold">Best Seller 2</h3>
            </div>
          </div>
          <div className="relative">
            <img src="https://i.pinimg.com/736x/e5/25/08/e5250876a2a08a192ae624922b6cf79f--fashion-wear-high-fashion.jpg" alt="Best Seller 3" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white text-2xl font-semibold">Best Seller 3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="my-16 bg-blue-500 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Join our Newsletter</h2>
        <p className="text-lg mb-8">Get the latest updates and offers directly in your inbox</p>
        <input type="email" placeholder="Enter your email" className="p-4 rounded-lg text-gray-700 w-2/3 md:w-1/3" />
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg ml-4 hover:bg-gray-100">Subscribe</button>
      </section>
    </div>
  );
};

export default Home;
