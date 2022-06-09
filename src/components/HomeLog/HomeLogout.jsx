import React from "react";
//import { useAuth0 } from "@auth0/auth0-react";

const HomeLogout = () =>{

    const logout=()=>{
        alert('Debería cerrar sesión')
    }

    return(
        <>
            <div onClick={() => logout({  })}>
                Cerrar sesión
            </div>
        </>
    )

}

export default HomeLogout