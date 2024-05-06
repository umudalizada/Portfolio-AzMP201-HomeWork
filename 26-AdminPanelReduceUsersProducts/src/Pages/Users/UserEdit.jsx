
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { patchById } from '../../Service';
import { BASE_URL, BASE_URL_USERS } from '../../Service/Api';


const UserEdit = ({ state, dispatch }) => {
  const location = useLocation();

  const editId = location.state.id;

  const find = state.allUser.find(item => item.id === editId);

  const [formData, setFormData] = useState({
    userName: find.userName,
    name: find.name,
    surname: find.surname,
    email: find.email,
    password: find.password,
    gender: find.gender,
    isAdmin: find.isAdmin,


  });

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };


  const navigatePage = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await patchById(BASE_URL_USERS, editId, formData);
    } catch (error) {
      console.error('Error editing data:', error);
    }
    navigatePage("/users")
    window.location.reload()

  };


  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          value={formData.name}
          type="text"
          id="companyName"
          name="companyName"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Surname
        </label>
        <input
          value={formData.surname}
          type="text"
          id="companyName"
          name="companyName"
          onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="contactName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          UserName
        </label>
        <input
          value={formData.userName}
          type="text"
          id="contactName"
          name="contactName"
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          value={formData.password}
          type="password"
          id="city"
          name="city"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          value={formData.email}
          type="email"
          id="region"
          name="region"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Admin
        </label>
        <select
          id="admin"
          name="admin"
          value={formData.isAdmin ? "true" : "false"}
          onChange={(e) => setFormData({ ...formData, isAdmin: e.target.value === "true" })}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        >
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>

      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Gender
        </label>
        <div>
          <label htmlFor="male" className="inline-flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleGenderChange}
              className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2">Male</span>
          </label>
          <label htmlFor="female" className="inline-flex items-center ml-6">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleGenderChange}
              className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>


      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
      </button>
    </form>
  );
};

export default UserEdit;