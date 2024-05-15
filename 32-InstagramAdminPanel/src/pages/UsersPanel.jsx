import React, { useEffect } from 'react';
import { useDeleteUserMutation, useGetAllProductQuery } from '../services/UsersPanel';
import { useDispatch, useSelector } from 'react-redux';

const UsersPanel = () => {
  const { data: alluser, refetch } = useGetAllProductQuery();
  const [DeleteUser] = useDeleteUserMutation();
  const dispatch = useDispatch();

  return (
    <>
      <section className="antialiased bg-gray-100 text-gray-600 min-h-screen px-4">
        <div className="flex flex-col justify-center">
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Username</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Gender</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Age</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Delete</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Detail</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Edit</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {alluser &&
                      alluser.map((elem) => {
                        return (
                          <tr key={elem._id}>
                            <td className="p-6 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className=""
                                    src={elem.image}
                                    width={40}
                                    height={40}
                                    alt="Profile"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">{elem.name}</div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{elem.username}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500">
                                {elem.email}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">{elem.gender}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">{elem.age}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">
                                <button
                                  onClick={async () => {
                                    await DeleteUser(elem._id);
                                    refetch();
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">
                                
                                <button>Detail</button>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">
                                <button>Edit</button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersPanel;
