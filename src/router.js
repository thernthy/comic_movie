import React, { useState } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Index from "./Layout/Index";
import Login from "./wigget/Login";
import Auth from "./Layout/Auth";
import App from "./App";
import Error from "./wigget/Error";
import Home from "./wigget/Home";
import DetialPage from "./wigget/Detailpage";
const message = '404';
let titles = null;
let datas = [];
export const handleDetailTitle = (title, data) => {
  titles = title;
  datas = data;
}
console.log(titles)

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    //loader: rootLoader,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: '/detail',
        element: <DetialPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <Navigate to={'/login'} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path:'/*',
    element:<Error message={message}/>,
  }
]);


export default routers;

