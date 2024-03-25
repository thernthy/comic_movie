import React from "react";
//layter will import loding so this loading will load first befor distroy 
const Logout = (token, user) => {
    // <Loding status={'true'} />
    setTimeout(() => {
        distroyUserLogs(token)
    }, 3000);
}

function distroyUserLogs(token){
   console.log(token)
}

export default Logout;