import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ state }) => {
  const username = useRef();
  const pass = useRef();
  const navigatePage = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = state.allUserSearch.find((elem) => elem.userName === username.current.value && elem.password === pass.current.value);
    if (user) {
      navigatePage("/");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center" style={{ backgroundColor: '#508bfc' }}>
      <div className="max-w-md w-full px-8 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <input
              ref={username}
              type="text"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <input
              ref={pass}
              type="password"
              className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="mr-2 leading-tight text-blue-600"
            />
            <label className="text-gray-700" htmlFor="remember">Remember password</label>
          </div>
          <button
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Log In
          </button>
          <hr className="my-4" />
          <button
            className="w-full py-3 bg-red-500 text-white font-bold rounded-md focus:outline-none hover:bg-red-600 transition duration-300"
            style={{ backgroundColor: '#dd4b39' }}
            type="submit"
          >
            <i className="fab fa-google me-2"></i>Sign in with Google
          </button>
          <button
            className="w-full py-3 bg-blue-700 text-white font-bold rounded-md focus:outline-none hover:bg-blue-800 transition duration-300 mt-2"
            style={{ backgroundColor: '#3b5998' }}
            type="submit"
          >
            <i className="fab fa-facebook-f me-2"></i>Sign in with Facebook
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
