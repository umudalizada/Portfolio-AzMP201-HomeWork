import React, { useEffect, useRef, useState } from 'react'
import { useGetAllUserQuery, usePatchUserByIdMutation } from '../services/UsersPanel';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
  const [patchUser] = usePatchUserByIdMutation();
  const { data, refetch } = useGetAllUserQuery();
  const {id} = useParams()
  const find = data.find(elem => elem._id == id)
  const dispatch = useDispatch();

  const nameVal = useRef()
  const surnameVal = useRef()
  const usernameVal = useRef()
  const passwordVal = useRef()
  const emailVal = useRef()
  const imageVal = useRef()
  const [gender, setGender] = useState(find.gender);
  const ageVal = useRef()

const navigate=useNavigate()


  const hanfleAdd = async (e) => {
    e.preventDefault();

    let obj = {
      name: nameVal.current.value,
      surname: surnameVal.current.value,
      password: passwordVal.current.value,
      age: ageVal.current.value,
      image: imageVal.current.value,
      gender,
      username: usernameVal.current.value,
      email: emailVal.current.value,
    };
    await patchUser({ id: find._id, obj }); // patchUser fonksiyonunu kullanırken id'yi ve objeyi birleştir
    refetch();
    navigate("/")
  };
  



  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .-z-1 {\n    z-index: -1;\n  }\n\n  .origin-0 {\n    transform-origin: 0%;\n  }\n\n  input:focus ~ label,\n  input:not(:placeholder-shown) ~ label,\n  textarea:focus ~ label,\n  textarea:not(:placeholder-shown) ~ label,\n  select:focus ~ label,\n  select:not([value='']):valid ~ label {\n    /* @apply transform; scale-75; -translate-y-6; */\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))\n      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    --tw-scale-x: 0.75;\n    --tw-scale-y: 0.75;\n    --tw-translate-y: -1.5rem;\n  }\n\n  input:focus ~ label,\n  select:focus ~ label {\n    /* @apply text-black; left-0; */\n    --tw-text-opacity: 1;\n    color: rgba(0, 0, 0, var(--tw-text-opacity));\n    left: 0px;\n  }\n"
        }}
      />
      <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Form With Floating Labels</h1>
          <form id="form" noValidate="" onSubmit={(e)=>hanfleAdd(e)}>
            <div className="relative z-0 w-full mb-5">
              <input
                ref={nameVal}
                defaultValue={find.name}
                type="text"
                name="name"
                placeholder=" "
                required=""
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter name
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Name is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                defaultValue={find.surname}

                ref={surnameVal}
                type="text"
                name="name"
                placeholder=" "
                required=""
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter Surname
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Surname is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                ref={usernameVal}
                defaultValue={find.username}

                type="text"
                name="name"
                placeholder=" "
                required=""
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter Username
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Username is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                ref={emailVal}
                defaultValue={find.email}

                type="email"
                name="email"
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter email address
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Email address is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                ref={ageVal}
                defaultValue={find.age}

                type="number"
                name="email"
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter Age
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Age is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                ref={imageVal}
                defaultValue={find.image}

                type="text"
                name="email"
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter Image Link
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Image Link is required
              </span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                ref={passwordVal}
                defaultValue={find.password}

                type="password"
                name="password"
                placeholder=" "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter password
              </label>
              <span className="text-sm text-red-600 hidden" id="error">
                Password is required
              </span>
            </div>
            <fieldset className="relative z-0 w-full p-px mb-5">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Choose an option
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    type="radio"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Male
                </label>
                <label>
                  <input
                     checked={gender === 'female'}
                     onChange={() => setGender('female')}
                    type="radio"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Female
                </label>
              </div>
              <span className="text-sm text-red-600 hidden" id="error">
                Option has to be selected
              </span>
            </fieldset>


            <button
              id="button"
              type="submit"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </>

  )
}

export default AddUser
