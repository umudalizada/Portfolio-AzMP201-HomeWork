import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, json, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UsersContext';
import SchemaLogin from './Schema/SchemaLogin';

const Login = () => {
  const { allUser } = useContext(UserContext);
  const navigatePage = useNavigate();

  const handleLogin = (values) => {
    const user = allUser.find((elem) => elem.userName === values.username && elem.password === values.password);
    if (user) {
      localStorage.setItem("adminuser", JSON.stringify(user))
      navigatePage('/products');
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
          validationSchema={SchemaLogin}
          onSubmit={handleLogin}
        >
          {({ values }) => (
            <Form>
              <div className="mb-6">
                <Field
                  type="text"
                  name="username"
                  value={values.username}
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                  placeholder="Username"
                />
                <ErrorMessage name="username" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="password"
                  name="password"
                  value={values.password}
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <button
                className="w-full mb-4 py-3 bg-blue-500 text-white font-bold rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                Log In
              </button>
              <Link to="/register">
                Register ?
              </Link>
            </Form>
          )}
        </Formik>


      </div>
    </section>
  );
};

export default Login;
