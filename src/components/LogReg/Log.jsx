import React, { useState } from "react";
//import { useState, Fragment } from "react";
//Material UI Components
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Icon from '../../Images/icon/myguest.svg'
import Back from '../../Images/icon/back-icon.svg'

import Reg from "./Reg";

const Log = ({isAuthenticated}) => {
    const [login, setLogin] = useState(true)
    const [ user, setUser ] = useState()
    const [ password, setPassword ] = useState()

    const inputLog = () => {
        /*console.log(nombre)*/
    }

    const loginUser = (e, user) => {
        e.preventDefault()
        console.log('Click login')

        if( user == 'ArleyTest' && password == '12345' ){
            isAuthenticated(true)
            console.log('User correcto!')
        }
    }

    const register =()=>{
        setLogin(false)
    }
    console.log(isAuthenticated)

    return (
        <>
            {
                login ?
                    <form action="" className="login-form">
                        <div className="form-header">
                            <img src={Icon} alt="" />
                        </div>
                        <Grid item xs={9}>
                        <div className="form-title"><strong>Inicia sesión</strong></div>

                            <TextField
                                //defaultValue={item.value}
                                //defaultValueParagraph={item.value}
                                variant="outlined"
                                value={user}
                                //onBlur={(e) => handleValue(item.id, e)}
                                fullWidth
                                //required={item.required}
                                placeholder="Ingresa tu usuario"
                                sx={{ mb: 2 }}
                                onChange={(e) => inputLog(e.target.value)}
                            />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                variant="outlined"
                                fullWidth
                                placeholder="Ingresa tu contraseña"
                                //disabled
                                multiline
                                value={password}
                                type="password"
                            //rows={3}
                            />
                        </Grid>
                        <Grid>
                            {/* Botón enviar respuestas */}
                            <Grid container direction="row" className="boton-crear-align left" sx={{ p: 3 }}>
                                <button className="boton-crear" onClick={(e) => loginUser(e)}>Inicia sesión</button> {/* onClick={()=> enviarLista() } */}
                            </Grid>
                        </Grid>
                        <div className="form-footer"></div>
                        <div className="back"><a href="#" onClick={() => register()}>Regístrate <img src={Back} alt="" className="img-rotate"/></a></div>

                    </form>

                    :
                    <Reg />

            }



        </>
    )

}

export default Log