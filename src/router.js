import React from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Index from "./Layout/Index";
import Login from "./wigget/Login";
import Auth from "./Layout/Auth";
import App from "./App";
//import Root, { rootLoader } from "./routes/root";
//import Team, { teamLoader } from "./routes/team";

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
    element:<h1>Not found</h1>
  }
]);


export default routers;

