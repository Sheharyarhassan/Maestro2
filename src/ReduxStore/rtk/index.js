import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7264/api",
  }),

  endpoints: (builder) => ({
    getRhythmBanner: builder.query({
      query: ({ area, page }) =>
        `YellowRhythm/GetBanner?area=${area}&page=${page}`,
    }),
    getRhythmById: builder.query({
      query: (Id) => `YellowRhythm/GetRhythmById?id=${Id}`,
    }),
    getRhythms: builder.mutation({
      query: (user) => ({
        url: `/YellowRhythm/GetRhythms`,
        method: "POST",
        body: user,
      }),
    }),
    //Instrument//
    getInstrumentBanner: builder.query({
      query: ({ area, page }) =>
        `YellowInstrument/GetBanner?area=${area}&page=${page}`,
    }),
    getInstruments:builder.mutation({
      query: (params) => ({
        url: `/YellowInstrument/GetInstruments`,
        method: "POST",
        body: params,
      }),
    }),
    //Register//
    signupUser: builder.mutation({
      query: (user) => ({
        url: `/Client/Post`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useGetRhythmBannerQuery,
  useGetRhythmsMutation,
  useGetRhythmByIdQuery,
  //Instrument
  useGetInstrumentBannerQuery,
  useGetInstrumentsMutation,
  //POST CALL's APIs
  useSignupUserMutation,
} = userApi;
