import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersPanel = createApi({
  reducerPath: "userpanel",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-azmp201-homework-3d45.onrender.com/api/users",
  }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllProduct: builder.query({
      query: () => `/`,
    }),
    postUser: builder.mutation({
      query: ({ obj }) => ({
        url: `/`,
        method: "POST",
        body: obj,
      }),
    }),
    patchPost: builder.mutation({
      query: ({id,  obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),
  }),
  
  
  
});


export const {
  useGetAllProductQuery,usePostUserMutation,usePatchPostMutation
} = UsersPanel;