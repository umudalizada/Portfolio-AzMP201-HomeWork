import React from 'react';
import { useGetAllUserQuery } from '../services/UsersPanel';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { data } = useGetAllUserQuery();
  let element = useParams();
  let find = data.find((elem) => elem._id === element.id);

  return (
    <>
      <section className="container mx-auto px-8 py-8 lg:py-40">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
          User Info
        </h2>

        <div className="mt-10 mr-80 ml-80 ">
          {find && (
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
              <img
                src={find.image}
                alt="User"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="p-6 relative flex flex-col justify-end">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                  {find.name} {find.surname}
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                  Age: {find.age}<br />
                  Email: {find.email}<br />
                  Gender: {find.gender}<br/>
                  Pasword: {find.password}

                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Detail;
