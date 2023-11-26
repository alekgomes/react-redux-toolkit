import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/" }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "/user",
    }),
    addUser: build.mutation({
      query: (body) => {
        return {
          url: `/user`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        };
      },
    }),
  }),
});

// Auto-generated hooks
export const { useGetUsersQuery, useAddUserMutation } = api;
