import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersPanel = createApi({
  reducerPath: "userpanel",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users",
  }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllProduct: builder.query({
      query: () => `/`,
    }),

    DeleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),



});


export const {
  useGetAllProductQuery, useDeleteUserMutation
} = UsersPanel;