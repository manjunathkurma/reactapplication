import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { Link } from 'react-router-dom';
import Counter from './features/counter/counter';
import Todo from './features/todo/todo';
import Country from './features/country/country';
import Books from './features/books/books';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import CountryDetails from './features/country/countryDetails';
import AddBook from './features/books/addBook';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
          path:'/counter',
          element:<Counter></Counter>,
        },
        {
             path:'/todo',
            element:<Todo></Todo>,
        },
        {
          path:'/country',
          element:<Country></Country>, 
          children:[
            {
              path:'/country/:cname',
              element:<CountryDetails></CountryDetails>,
            }
          ]
        },
        {
          path:'/books',
          element:<Books></Books>,
          children:[
            {
              path:'/books/addBook',
              element:<AddBook></AddBook>
            }
          ]
        }
      ]
    }
  ]);
  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
