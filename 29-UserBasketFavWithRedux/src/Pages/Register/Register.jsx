import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postData } from '../../Service';
import { BASE_URL_USERS } from '../../Service/Api';
import { useNavigate } from 'react-router-dom';
import Schema from '../Login/Schema/Schema';
import { UserContext } from '../../Context/UsersContext';

const Register = () => {
  const {allUser, SetallUser, allUserSearch, SetallUserSearch}=useContext(UserContext)

  const [gender, setGender] = useState('');
  const navigatePage = useNavigate();

  const initialValues = {
    name: '',
    surname: '',
    userName: '',
    password: '',
    email: '',
    image: '',
    gender: ''
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    const date = new Date();
    const newObj = {
      ...values,
      id: String(state.allUser.length + 1),
      isAdmin: false,
      date: date.toLocaleString()
    };

    const findemail = allUser.find((elem) => elem.email === newObj.email);
    if (findemail) {
      alert('This email is already in use!');
      setSubmitting(false);
      return;
    }

    const findusername = allUser.find((elem) => elem.userName === newObj.userName);
    if (findusername) {
      alert('This username is already in use!');
      setSubmitting(false);
      return;
    }

    await postData(BASE_URL_USERS, newObj);

    setSubmitting(false);
    navigatePage('/login');
    window.location.reload();
  };

  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full px-8 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Sign up</h2>
        <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-6">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                />
                <ErrorMessage name="surname" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                />
                <ErrorMessage name="userName" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  type="text"
                  name="image"
                  placeholder="Image link"
                  className="block w-full py-2 px-3 bg-gray-200 border border-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-md transition duration-300"
                />
                <ErrorMessage name="image" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Gender</label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <Field type="radio" name="gender" value="Male" className="form-radio" />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <Field type="radio" name="gender" value="Female" className="form-radio" />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
                <ErrorMessage name="gender" component="div" className="text-red-500" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Register;
