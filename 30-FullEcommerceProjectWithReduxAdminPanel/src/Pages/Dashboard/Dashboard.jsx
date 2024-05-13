import React, { useContext } from 'react';
import { UserContext } from '../../Context/UsersContext';
import { ProductContext } from '../../Context/ProductContext';

const Dashboard = ({ state }) => {
  const { allData, SetAllData, allDataSearch, SetallDataSearch } = useContext(ProductContext)
  const { allUser, SetallUser, allUserSearch, SetallUserSearch } = useContext(UserContext)


  const productCount = allDataSearch.length;
  const adminCount = allUserSearch.filter(item => item.isAdmin).length;
  const userCount = allUserSearch.length;

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
