import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { patchById } from '../../Service';
import { BASE_URL } from '../../Service/Api';
import { ProductContext } from '../../Context/ProductContext';


const Edit = () => {
  const { allData, SetAllData, allDataSearch, SetallDataSearch } = useContext(ProductContext)
const navigatePage=useNavigate()

  const location = useLocation();
  
  const editId = location.state.id;

  const find = allData.find(item => item.id === editId);

  const [formData, setFormData] = useState({
    title: find.title,
    image: find.image,
    price: find.price,
    category: find.category,
    rating:{
      count:find.rating.count,
      rate:find.rating.rate
    }
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await patchById(BASE_URL, editId, formData);
    } catch (error) {
      console.error('Error editing data:', error);
    }
    navigatePage("/Admin")
    window.location.reload();
  };
  

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
         Title
        </label>
        <input
          value={formData.title}
          type="text"
          id="companyName"
          name="companyName"
          onChange={(e)=>setFormData({...formData,title:e.target.value})}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="contactName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Price
        </label>
        <input
          value={formData.price}
          type="text"
          id="contactName"
          name="contactName"
          onChange={(e)=>setFormData({...formData,price:e.target.value})}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Image
        </label>
        <input
          value={formData.image}
          type="text"
          id="city"
          name="city"
          onChange={(e)=>setFormData({...formData,image:e.target.value})}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </label>
        <select
  value={formData.category}
  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
  <option value="Jewelry">jewelry</option>
  <option value="Electronics">Electronics</option>
  <option value="Women's Clothing">Women's Clothing</option>
  <option value="Men's Clothing">Men's Clothing</option>
  <option value="Kid's Clothing">Kid's Clothing</option>
</select>

      </div>
      <div className="mb-5">
        <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Count
        </label>
        <input
          value={formData.rating.count}
          type="text"
          id="region"
          name="region"
          onChange={(e)=>setFormData({...formData,rating:{...formData.rating,count:e.target.value}})}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
      </div>
      <div className="mb-5">
        <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Rating
        </label>
        <input
          value={formData.rating.rate}
          type="text"
          id="region"
          name="region"
          onChange={(e)=>setFormData({...formData,rating:{...formData.rating,rate:e.target.value}})}

          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required=""
        />
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

export default Edit;