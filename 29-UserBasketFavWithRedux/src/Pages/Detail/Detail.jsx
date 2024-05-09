import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

const Detail = ({ state, dispatch }) => {
  const { allData} = useContext(ProductContext)

  const {id}=useParams()
  console.log(id);
  const find = allData.find((item) => item.id === id);



  return (
    <div className=" bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  md:flex-row -mx-4">
          <div className="md:flex-1 px-4 ">
            <div className="h-[460px] rounded-lg bg-white dark:bg-gray-700 mb-4">
              <img
                className="h-[460px] mx-auto rounded-lg bg-white dark:bg-gray-700 mb-4"
                src={find.image}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Product Name
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {find.title}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="ms-4 text-gray-600 dark:text-gray-300">
                  {find.price} $
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Category:
                </span>
                <span className="ms-4 text-gray-600 dark:text-gray-300">
                  {find.category}
                </span>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Raiting:
              </span>
              <h3 className="ms-4">{find.rating.rate}</h3>
              <div className="flex ms-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {find.description}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
