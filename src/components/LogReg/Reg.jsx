import React, { useState } from "react";
//import { useState, Fragment } from "react";
//Material UI Components
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Icon from '../../Images/icon/myguest.svg'
import Back from '../../Images/icon/back-icon-normal.svg'

import Log from "./Log";

const Reg = () => {

    const [register, setRegister] = useState(true)

    const login = () => {
        setRegister(false)
    }

    
        return (
            <>

                {
                    register ?
                        <form action="" className="login-form">
                            <div className="form-header">
                                <img src={Icon} alt="" />
                            </div>
                            <Grid item xs={9}>
                            <div className="form-title"><strong>Regístrate</strong></div>
                                <TextField
                                    //defaultValue={item.value}
                                    //defaultValueParagraph={item.value}
                                    variant="outlined"
                                    //onBlur={(e) => handleValue(item.id, e)}
                                    fullWidth
                                    //required={item.required}
                                    placeholder="Ingresa tu nombre"
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    //defaultValue={item.value}
                                    //defaultValueParagraph={item.value}
                                    variant="outlined"
                                    //onBlur={(e) => handleValue(item.id, e)}
                                    fullWidth
                                    //required={item.required}
                                    placeholder="Ingresa tu apellido"
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    //defaultValue={item.value}
                                    //defaultValueParagraph={item.value}
                                    variant="outlined"
                                    //onBlur={(e) => handleValue(item.id, e)}
                                    fullWidth
                                    //required={item.required}
                                    placeholder="Ingresa el nombre de tu negocio"
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    //defaultValue={item.value}
                                    //defaultValueParagraph={item.value}
                                    variant="outlined"
                                    //onBlur={(e) => handleValue(item.id, e)}
                                    fullWidth
                                    //required={item.required}
                                    placeholder="Ingresa tu correo"
                                    sx={{ mb: 2 }}
                                />

                                <TextField
                                    //defaultValue={item.value}
                                    //defaultValueParagraph={item.value}
                                    variant="outlined"
                                    //onBlur={(e) => handleValue(item.id, e)}
                                    fullWidth
                                    //required={item.required}
                                    placeholder="Ingresa tu teléfono"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid>
                                {/* Botón enviar respuestas */}
                                <Grid container direction="row" className="boton-crear-align left" sx={{ p: 3 }}>
                                    <button className="boton-crear" disabled>Registrarse</button> {/* onClick={()=> enviarLista() } */}
                                </Grid>
                            </Grid>

                            <div className="form-footer"></div>
                            <div className="back"><a href="#" onClick={() => login()}> <img src={Back} alt="" /> Iniciar sesión</a></div>
                        </form>

                        :
                        <Log />
            }


            </>
        )

}

export default Reg