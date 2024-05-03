
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import SortButtons from './SortButtons';
import { deleteById } from '../Service';

const Admin = ({ state, dispatch }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteById(id)
    dispatch({
      type: "SetDelete",
      id,
    });
  };

  const handleEdit = (id) => {
    navigate("/edit",{state:{id:id}});
  };

  const getBackgroundColor = (count) => {
    if (count < 100) {
      return "bg-red-500";
    } else if (count >= 100 && count <= 200) {
      return "bg-yellow-500";
    }
    return "";
  };

  return (
    <div className="container">
      <Search state={state} dispatch={dispatch} />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <SortButtons state={state} dispatch={dispatch} />
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Count
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {state.allDataSearch.map((elem) => (
              <tr
                key={elem.id}
                className={getBackgroundColor(elem.rating.count)}
              >
                <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {elem.title.substring(0, 10)}
                </td>
                <td className="px-6 py-4">{elem.price}</td>
                <td className="px-6 py-4">{elem.category}</td>
                <td className="px-6 py-4">
                  <img className="h-12 w-12" src={elem.image} alt="" />
                </td>
                <td className="px-6 py-4">{elem.rating.rate}</td>
                <td className="px-6 py-4">{elem.rating.count}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handleDelete(elem.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    onClick={() => handleEdit(elem.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
