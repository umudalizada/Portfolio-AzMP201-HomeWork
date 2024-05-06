import React from 'react';

const Dashboard = ({ state }) => {

  const productCount = state.allDataSearch.length;
  const adminCount = state.allUserSearch.filter(item => item.isAdmin).length;
  const userCount = state.allUserSearch.length;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <h1 className="text-4xl font-bold mb-8 text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Products</h2>
          <p className="text-gray-800">Product Count: {productCount}</p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Admins</h2>
          <p className="text-gray-800">Admin Count: {adminCount}</p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Users</h2>
          <p className="text-gray-800">User Count: {userCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
