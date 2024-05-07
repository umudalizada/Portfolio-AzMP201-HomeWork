import React, { useRef, useState } from "react";
import { postData } from "../../Service";
import { useNavigate } from "react-router-dom";
import { BASE_URL_USERS } from "../../Service/Api";

const PostsUser = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState(""); 
  const [isAdmin, setIsAdmin] = useState(""); 

  let name = useRef();
  let image = useRef();
  let surname = useRef();
  let userName = useRef();
  let password = useRef();
  let email = useRef();
  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth() + 1; 
  let day = date.getDate();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newObj = {
      name: name.current.value,
      surname: surname.current.value,
      userName: userName.current.value,
      password: password.current.value,
      email: email.current.value,
      image:image.current.value,
      balane:0,
      gender: gender,
      isAdmin: isAdmin === "Yes" ? true : false,
      date: `${day}-${month}-${year} ${hours}:${minute}:${second} `
    };

    postData(BASE_URL_USERS, newObj).then(() => {
      name.current.value = "";
      userName.current.value = "";
      password.current.value = "";
      email.current.value = "";
      image.current.value = "";
      surname.current.value = "";
      setGender(""); 
      setIsAdmin(""); 
      date.current.value = "";
    });
  };

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={(e) => handleSubmit(e)}>

        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={name}
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={surname}
            type="text"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Surname
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={userName}
            type="text"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={password}
            type="password"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={email}
            type="email"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={image}
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Link
          </label>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Admin
          </label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio"
                name="isAdmin"
                value="Yes"
                checked={isAdmin === "Yes"}
                onChange={(e) => setIsAdmin(e.target.value)}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="isAdmin"
                value="No"
                checked={isAdmin === "No"}
                onChange={(e) => setIsAdmin(e.target.value)}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostsUser;
