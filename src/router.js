import React, { useState } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Index from "./Layout/Index";
import Login from "./pages/Login";
import Auth from "./Layout/Auth";
import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";
import DetialPage from "./pages/Detailpage";
import Anouments from "./pages/Anouments";
import RequestComic from "./pages/RequestComic";
import Completed from "./pages/complated";
import Lastes from "./pages/Lates";
import Popularity from "./pages/Popularity";
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
        path: "/complate",
        element: <Completed />,
      },
      {
        path: "/lates",
        element: <Lastes />,
      },
      {
        path: "/lates",
        element: <Lastes />,
      },
      {
        path: "/popularity",
        element: <Popularity />,
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

