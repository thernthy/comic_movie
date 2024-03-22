import React from "react";
import Login from "../wigget/Login";
import { Navigate, redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Auth ()  {
    return(
        <>
        <Navigate to={'/login'} />
        <Outlet />
        </>
    );
}

export default Auth;