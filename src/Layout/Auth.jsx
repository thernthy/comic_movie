import React, { useEffect } from "react";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../Appcontrollers/ContextProvider"
import { Outlet } from "react-router-dom";
function Auth ()  {
    const {token} = useStateContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
          navigate('/'); // Navigate to home page
        }
      }, [token, navigate]);
    return <Outlet />;
}

export default Auth;