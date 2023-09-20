import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3/' }),
  endpoints: (builder) => ({
    getAllCountry: builder.query({
      query: () => `all`,
    }),
    getAllCountryDetailes:builder.query({
     query:(cn)=>{return `name/${cn}`} 
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCountryQuery,useGetAllCountryDetailesQuery } = countryApi

