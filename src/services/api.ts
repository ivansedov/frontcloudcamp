import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PostFormResponse {
  data: any;
}

export const cloudAPI = createApi({
  reducerPath: 'cloudAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend' }),
  endpoints: (builder) => ({
    postForm: builder.mutation<PostFormResponse, FormData>({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostFormMutation } = cloudAPI;
