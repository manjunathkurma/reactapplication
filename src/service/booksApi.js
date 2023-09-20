import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/books' }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ``,
    }),
    addBook:builder.mutation({
        query:(book)=>{
             return {
                url:'/',
                method:'POST',
                body:book
             }
        }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBooksQuery ,useAddBookMutation,useLazyGetAllBooksQuery} = booksApi

