import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Main from '../Main-ELIMINAR/Main'
import Forms from '../Form/Forms'

import FormBuilder from '../FormBuilder/index'

import Settings from '../Settings/Settings'

import Navbar from "./Navbar"
import HomeLog from "../HomeLog/HomeLog"
import Answers from "../Answers/Answers"

import Confirm from "../Confirm/Confirm"
import UserForm from '../UserForm/UserForm'
import LogReg from '../LogReg/LogReg'

import HomeProfile from '../HomeProfile/HomeProfile'

class Menu extends React.Component {

    render(){
        return(

            <>
                <BrowserRouter>
                    <Navbar />
                    
                    <main className="margin">
                    <Routes>
                        <Route path="/" element={<Main />} exact />
                        <Route path="/formularios" element={<Forms />} />
                        {/*<Route path="/formulario" element={<Forms />} />*/}
                        <Route path="/formulario" element={<FormBuilder />} />
                        <Route path="/respuestas" element={<Answers />}></Route>
                        <Route path="/configuracion" element={<Settings />} />
                        <Route path="/confirm" element={<Confirm/>}></Route>
                        <Route path="/UserForm" element={<UserForm />}></Route>
                        {/*<Route path="/LogReg" element={<LogReg />}></Route>*/}
                        
                        <Route path="/homeProfile" element={<HomeProfile />}/>
                        <Route path="/HomeLog" element={<HomeLog />} />
                    </Routes>
                    </main>
                </BrowserRouter>
            </>
        )
    }


}

export default Menu


