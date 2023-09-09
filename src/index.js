import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Country from './Country';
import Details from './details'
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import  Router  from './Country';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path:'/Country',
      element:<Country/>,
      children:[
        {
          path:"/Country/details/:cname",
          element:<Details/>
        }
      ]
    }]
    
  },

]);

  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
