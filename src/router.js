import React from "react";

import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Index from "./Layout/Index";
import Login from "./pages/Login";
import Auth from "./Layout/Auth";
import Error from "./pages/Error";
import Home from "./pages/Home";
import DetialPage from "./pages/Detailpage";
import Anouments from "./pages/Anouments";
import Completed from "./pages/complated";
import { Path } from "./config/Path";
import FilterData from "./pages/filterData";
import Readcomic from "./pages/view";
import Lates from "./pages/letes/index"
import Popular from "./pages/popular/index";
import { Bookmakr } from "./pages/bookmark/index";
const message = '404';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    //loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/complate",
        element: <Completed />,
      },
      {
        path: "/lates",
        element: <Lates />,
      },
      {
        path: "/popularity",
        element: <Popular />,
      },

      {
        path: Path.DETAILCOMIC,
        element: <DetialPage />,
      },
      {
        path:Path.FILTERPAGE,
        element: <FilterData />
      },
      {
        path: Path.READCOMIC,
        element:<Readcomic />
      },
      {
        path: '/catoon request',
        element: <Bookmakr />,
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

