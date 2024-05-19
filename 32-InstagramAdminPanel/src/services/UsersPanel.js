import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersPanel = createApi({
  reducerPath: "userpanel",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-azmp201-homework-3d45.onrender.com/api/users",
  }),
  endpoints: (builder) => ({
    getUsertById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllUser: builder.query({
      query: () => `/`,
    }),

    DeleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    
    patchUserById: builder.mutation({
      query: ({ id, obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),
  }),



});


export const {
  useGetAllUserQuery, useGetUsertByIdQuery, useDeleteUserMutation,usePatchUserByIdMutation
} = UsersPanel;