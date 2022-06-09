import React from 'react'
//import { Link } from "react-router-dom";

//import LogReg from '../LogReg/LogReg'
import Grid from "@material-ui/core/Grid";
import Log from '../LogReg/Log';

function HomeLog({isAuthenticated}) {
    /*
    const loginWithRedirect =()=>{
        alert('Debería inicar sesión!')
        setTimeout(function(){
        //window.location.href = 'http://localhost:3000/UserForm';
        }, 5000);

    }
    */

    console.log(isAuthenticated)

    return (
        <>
            <header className='header-bg-red'>
                <Log isAuthenticated={isAuthenticated} />
            </header>

        </>
    )
}

export default HomeLog