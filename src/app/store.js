import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import { countryApi } from '../service/countryApi'
import { booksApi } from '../service/booksApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
export const store = configureStore({
  reducer: {
    c:counterReducer,
    t:todoReducer,
    [countryApi.reducerPath]:countryApi.reducer,
    [booksApi.reducerPath]:booksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware,booksApi.middleware),
})
setupListeners(store.dispatch)