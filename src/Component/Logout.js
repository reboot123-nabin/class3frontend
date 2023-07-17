
import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";
const Logout=()=>{
    const Navigate=useNavigate();
    const logout2=(e)=>{
        e.preventDefault();
       localStorage.removeItem('token');
       if(!localStorage.getItem('token')){
        Navigate('/login');
        }
    }

    return(
        <>

        <button onClick={logout2}>LOGOUT</button>
        </>
    )
}

export default Logout;