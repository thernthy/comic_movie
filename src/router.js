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
import Anouments from "./wigget/Anouments";
import RequestComic from "./wigget/RequestComic";
const message = '404';

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
      {
        path: '/catoon request',
        element: <RequestComic />,
      },
      {
        path: '/snnouncements',
        element: <Anouments />,
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

