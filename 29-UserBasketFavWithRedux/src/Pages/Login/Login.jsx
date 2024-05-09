import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Schema from './Schema/Schema';
import { UserContext } from '../../Context/UsersContext';



const Login = () => {
  const {allUser, SetallUser, allUserSearch, SetallUserSearch}=useContext(UserContext)
  

  const navigatePage = useNavigate();

  const handleLogin = (values) => {
    const user = allUser.find((elem) => elem.userName === values.username && elem.password === values.password);
    if (user) {
      navigatePage('/');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <section className="h-screen flex items-center justify-center" style={{ backgroundColor: '#508bfc' }}>
      <div className="max-w-md w-full px-8 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Log In</h2>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={Schema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form>
              <div className="mb-6">
                <Field
                  type="text"
                  name="username"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                  placeholder="Username"
                />
                <ErrorMessage name="username" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="password"
                  name="password"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <button
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;
