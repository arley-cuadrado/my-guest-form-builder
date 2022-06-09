import React, { useState } from "react";
import {
    Navigate,
    Route,
  } from "react-router-dom"
// JSONPretty
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
// Auth0
//import { useAuth0 } from "@auth0/auth0-react";

import Topbar from "../Topbar/Topbar";
import Menu from "../Menu/Menu";
//import { LOGIN } from "../Config/Router/Paths";

import HomeLog from "../HomeLog/HomeLog"


const HomeProfile = () =>{
    /*
    const isAuthenticated = true;

    if(isAuthenticated) {
        //return <HomeLog  isAuthenticated={isAuthenticated}/>;
        return <HomeProfile isAuthenticated={isAuthenticated} />;
    }
    */

    //const { user, isAuthenticated } = useAuth0();
    //const [ isAuthenticated, setIsAuthenticated ] = useState(true)

    const profileData = {
            idUser: 1, 
            user_picture: 'https://lh3.googleusercontent.com/a-/AOh14GgClBFzgUFgRuMOUUZWVGgDtljxL4czc_WPBHJvE4g=s96-c',
            given_name: 'Arley',
            family_name: 'Cuadrado Sierra',
            user_email: 'arley.cuadradosierra@testmail.com'
        }

    return(

        //isAuthenticated && (
            <>
                <Topbar 
                    profileData={profileData}

                />
                {/*
                <Route 
                    {...props} 
                />
                */}
                <Menu />
                <section>
                    {/*
                    <strong>User</strong>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    */}

                    {/*<JSONPretty data={user} />*/}
                </section>
            </>
        //)

    )

}

export default HomeProfile