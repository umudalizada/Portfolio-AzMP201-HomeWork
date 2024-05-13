import React, { useContext, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { patchById, postData } from "../../Service";
import { BASE_URL } from "../../Service/Api";

const Detail = () => {

  const { allData } = useContext(ProductContext)
  const { id } = useParams()
  const find = allData.find((item) => item.id === id);
  const [comment, setComments] = useState(find.comments)
  const newcomment = useRef()

  const addComment = (e, elem) => {
    e.preventDefault()
    let value = newcomment.current.value
    newcomment.current.value = ""
    let obj = [...comment, value]
    setComments(obj)
    elem.comments = obj
    patchById(BASE_URL, elem.id, { ...elem, comments: obj })
  }

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
        <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">
          <h3 className="font-bold">Comment</h3>
          <form onSubmit={(e) => addComment(e, find)}>
            <div className="flex flex-col">
              {find.comments.map((item) => {
                return (
                  <div className="border rounded-md p-3 ml-3 my-3">
                    <div className="flex gap-3 items-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/22263436?v=4"
                        className="object-cover w-8 h-8 rounded-full 
                        border-2 border-emerald-400  shadow-emerald-400
                        "
                      />
                      <h3 className="font-bold">User name</h3>
                    </div>
                    <p className="text-gray-600 mt-2">{item}</p>
                  </div>
                )
              })}
            </div>
            <div className="w-full px-3 my-2">
              <textarea
                ref={newcomment}
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="w-full flex justify-end px-3">
              <input
                type="submit"
                className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                defaultValue="Post Comment"
              />
            </div>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Detail;
