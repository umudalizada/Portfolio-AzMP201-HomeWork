import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Search from "./Search";
import SortButtons from "./SortButtons";
import { deleteById } from "../../Service";
import { BASE_URL } from "../../Service/Api";
import Category from "./Category";
import Dashboard from "../Dashboard/Dashboard";
import { ProductContext } from "../../Context/ProductContext";

const Admin = () => {
  const { allData, SetAllData, allDataSearch, SetallDataSearch } = useContext(ProductContext)

  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteById(BASE_URL, id);
    let filterDelete = allDataSearch.filter(item => item.id !== id);
    SetallDataSearch(filterDelete)
  };



  const getBackgroundColor = (count) => {
    if (count < 100) {
      return "bg-red-500";
    } else if (count >= 100 && count <= 200) {
      return "bg-yellow-500";
    }
    return "";
  };

  const handleEdit = (id) => {
    navigate("/edit", { state: { id: id } })
  }

  return (

    <div className="container">
      <Search />
      <Category />
      <SortButtons />

      <div className="forshadowww relative overflow-x-auto shadow-lg rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Count
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
              <th scope="col" className="px-6 py-3">
                Detail
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {allDataSearch.map((elem) => {
              return (
                <tr
                  key={elem.id}
                  className={getBackgroundColor(elem.rating.count)}
                >
                  <td className="px-6 py-4">
                    <img className="h-17 w-20" src={elem.image} alt="" />
                  </td>
                  <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {elem.title.substring(0, 10)}
                  </td>

                  <td className="px-6 py-4">${elem.price}</td>
                  <td className="px-6 py-4">{elem.category}</td>

                  <td className="px-6 py-4">{elem.rating.rate}</td>
                  <td className="px-6 py-4">{elem.rating.count}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900"
                      onClick={() => handleDelete(elem.id)}
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    <Link to={`detail/${elem.id}`}

                      type="button"
                      className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
                    >
                      Detail
                    </Link>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700"
                      onClick={() => handleEdit(elem.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
