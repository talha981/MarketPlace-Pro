import React, { useState } from 'react';

const UserProfile = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    orders: [
      { id: 1, date: '2024-07-01', total: '$99.99' },
      { id: 2, date: '2024-07-15', total: '$29.99' },
      { id: 3, date: '2024-08-01', total: '$79.99' },
    ],
  });

  // Handle profile update
  const handleUpdateProfile = () => {
    // For simplicity, we'll just log a message
    console.log('Profile updated');
  };

  // Handle logout
  const handleLogout = () => {
    // For simplicity, we'll just log a message
    console.log('Logged out');
  };

  return (
    <div className="container mx-auto px-4 my-16">
      <h1 className="text-4xl font-bold text-center mb-12">User Profile</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img 
            src={user.profilePicture} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
          <ul>
            {user.orders.map(order => (
              <li key={order.id} className="flex justify-between border-b py-2">
                <span>Order #{order.id} - {order.date}</span>
                <span>{order.total}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={handleUpdateProfile} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
        >
          Update Profile
        </button>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
