import React, { useState } from "react";
//Material UI Components
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Reg from './Reg'

import HomeLog from '../HomeLog/HomeLog'

const LogReg = ({ item, handleValue, deleteEl, handleRequired, handleElType, duplicateElement }) => {
    /*
    const LogReg = ({
      item,
      handleValue,
      deleteEl,
      handleRequired,
      handleElType,
      duplicateElement,
    }) => {
    */

    //const [ show ] = useState(false)

    const [showOption1, setShowOption1] = useState(true)
    //const [ showOption2, setShowOption2 ] = useState(false)

    const selectOption = () => {
        setShowOption1(false)
    }
    const selectOptionReverse = () => {
        setShowOption1(true)
    }

    return (
        <>

            <Paper elevation={1}>
                <Box sx={{ p: 3 }}>

                    {
                        showOption1
                            ?
                            <>
                                {/* Botón enviar respuestas */}
                                <Grid container direction="row" className="boton-crear-align left" sx={{ p: 3 }}>
                                    <button className="boton-crear" onClick={() => selectOption()}>Regístrate</button> {/* onClick={()=> enviarLista() } */}
                                </Grid>
                                <Grid container spacing={1} xs={9}>
                                    <Box sx={{ p: 3 }}>
                                        <hr />
                                        <div className="left">
                                            <h2>Inicio de sesión</h2>
                                        </div>
                                        {/* Here! */}
                                        {/*<Log />*/}
                                        <HomeLog />
                                    </Box>
                                </Grid>
                            </>

                            :

                            <>
                                <Grid container direction="row" className="boton-crear-align left" sx={{ p: 3 }}>
                                    <button className="boton-crear" onClick={() => selectOptionReverse()}>Login</button> {/* onClick={()=> enviarLista() } */}
                                </Grid>
                                <Grid container spacing={1} xs={9}>
                                    <Box sx={{ p: 3 }}>
                                        <hr />
                                        <div className="left">
                                            <h2>Registro</h2>
                                        </div>
                                        {/* Here! */}
                                        <Reg />
                                    </Box>
                                </Grid>
                            </>

                    }

                </Box>
            </Paper>

        </>
    );

};

export default LogReg;
