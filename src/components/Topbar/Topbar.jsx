import React, { useState } from "react";
// import Profile from '../../Images/Profile/profile-customer.png'
import Icon from '../../Images/icon/myguest.svg'

import HomeLogout from "../HomeLog/HomeLogout";

const Topbar = function( {profileData} ) {
    
    const [ dopdown, setDropedown ] = useState(true)

    const showDropDown = () =>{
        setDropedown(true)
    }

    /*
    {
        profileData.map( (item) =>{
            <>
                <span>{item.userPicture}</span>
                <span>{item.given_name}</span>
                <span>{item.email}</span>
            </>
        })
    }
    */

    return(
        <nav className="topbar">
            <div className="flexbox between padding align">
                <div>
                    <img src={Icon} alt="myguest"></img>
                </div>
                <div className="flexbox">
                <div className="profile-bg">
                    <strong className="userName">{profileData.given_name} {profileData.family_name}</strong>
                    <img src={profileData.user_picture} alt={profileData.given_name}></img>
                </div>

                <a href="#"><span>dropdown</span>
                    <aside onClick={() => showDropDown()}>
                        { dopdown ?  <HomeLogout /> : null }
                    </aside>
                </a>
                </div>
                
            </div>
        </nav>
    )
}

export default Topbar