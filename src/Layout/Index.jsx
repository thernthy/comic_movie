import React from "react";
import App from "../App";
import { Navigate, Outlet } from "react-router-dom";

function Index() {
    return <>
     <Navigate to={'/'} />
     <Outlet />
    </>;
}


export default Index;