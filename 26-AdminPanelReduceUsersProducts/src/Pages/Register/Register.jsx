import React, { useRef, useState } from 'react';
import { postData } from '../../Service';
import { BASE_URL_USERS } from '../../Service/Api';

const Register = () => {
  const [gender, setGender] = useState("");
  
  const nameRef = useRef();
  const surnameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date();
    const newObj = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      id: String(Math.random()), // Bu örnek için rastgele bir ID atıyorum.
      gender: gender,
      isAdmin: false,
      date: date.toLocaleString()
    };

    await postData(BASE_URL_USERS, newObj);

    // Formu temizle
    nameRef.current.value = "";
    surnameRef.current.value = "";
    userNameRef.current.value = "";
    passwordRef.current.value = "";
    emailRef.current.value = "";
    setGender("");
  };

  return (
    <section className="vh-100 bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full px-8 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              ref={nameRef}
              type="text"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              ref={surnameRef}
              type="text"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="Surname"
              required
            />
          </div>
          <div className="mb-6">
            <input
              ref={userNameRef}
              type="text"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="User Name"
              required
            />
          </div>
          <div className="mb-6">
            <input
              ref={passwordRef}
              type="password"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <input
              ref={emailRef}
              type="email"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Gender</label>
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
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
