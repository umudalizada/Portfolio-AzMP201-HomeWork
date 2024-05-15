import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersPanel = createApi({
  reducerPath: "userpanel",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/users",
  }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllProduct: builder.query({
      query: () => `/`,
    }),
  }),
});


export const {
  useGetAllProductQuery,
} = UsersPanel;