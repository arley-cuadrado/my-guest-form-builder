import React, { useState } from "react"
import { nanoid } from 'nanoid'
//import Opciones from './MicroForm/Opciones'

const ListaPreguntas = function ( ) {


    //-------------------------------
    const [pregunta, setPregunta] = useState('')
    const [preguntas, setPreguntas] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const agregarPreguntas = (e) => {
        e.preventDefault()

        //const crearFormulario = crearFormulario(pregunta)
        //const {crearFormulario} = this.props;
        //crearFormulario(pregunta)
        /*
        const {crearFormulario} = this.props;
        crearFormulario(pregunta)
        */

        console.log(`Estas deben ser las preguntas ${pregunta}`)

        if (!pregunta.trim()) {
            console.log('Elemento vacio 2')
            setError('El campo no puede estar vacío 2')
            return
        }

        setPreguntas([
            ...preguntas,
            { id: nanoid(), nombrePregunta: pregunta },
        ])
        setPregunta('')
        setError(null)
    }


    const eliminarPregunta = id => {
        const arrayFiltrado = preguntas.filter(item => item.id !== id)
        setPreguntas(arrayFiltrado)
        //console.log(id)
    }


    const editar = item => {
        console.log(item)
        setModoEdicion(true)
        setPregunta(item.nombrePregunta)
        setId(item.id)
    }

    return (
        <>

            <div className="center-main left-main">
                <main className="padding cien" > {/* key={nanoid()} */}

                    {/* ------------------------------------------ */}
                    <section className="flexbox title-form form-style box-shadow">
                        <div className="sesenta m-right">
                            <h4>Lista de preguntas</h4>
                            <ul>
                                {
                                    preguntas.length === 0 ? (
                                        <li className="empty">No hay preguntas</li>
                                    ) : (
                                        preguntas.map(item => (
                                            <li key={item.id}>

                                                <article className="lista-preguntas">
                                                    <div className="pregunta-input-gray cien"><span>{item.nombrePregunta}</span></div>
                                                    <div className="pregunta-button pregunta-button-gray cuarenta">
                                                        <button
                                                            onClick={() => eliminarPregunta(item.id)}
                                                        >
                                                            Eliminar
                                                        </button>

                                                        <button
                                                            onClick={() => editar(item)}
                                                        >
                                                            Editar
                                                        </button>
                                                    </div>
                                                </article>

                                                <div className="form-input">
                                                    {/* <Opciones /> */}
                                                </div>

                                            </li>
                                        ))

                                    )

                                }
                            </ul>
                        </div>
                        <div className="form-add cuarenta">
                            <h4>
                                {
                                    modoEdicion ? 'Editar pregunta' : 'Agregar pregunta'
                                }
                            </h4>

                            {/*<main onSubmit={ modoEdicion ? editarPregunta : agregarPregunta }>*/}
                            <main>
                                <div className="form-input">
                                    <input
                                        type="text"
                                        placeholder="Ingresa pregunta"
                                        onChange={e => setPregunta(e.target.value)}
                                        value={pregunta}
                                    />
                                </div>
                                {/*
                                {
                                    error ? <span className="error-message">{error}</span> : null
                                }

                                {
                                    modoEdicion ? (
                                        <button type="submit" id="agregar">Editar 2</button>
                                    ) : (
                                        <button type="submit" >Editar 2</button>
                                    )
                                }
                                // modoEdicion ? editarPregunta : agregarPreguntas 
                                <button type="submit" id="agregar" onClick={
                                    (e) => {
                                        agregarPreguntas(e);
                                        //props.crearFormulario({pregunta});
                                    }
                                }>Agregar 1</button>
                                
                                */}



                                {
                                error ? <span className="error-message">{error}</span> : null
                            }
                            {
                                    modoEdicion ? (
                                        <button type="submit" id="agregar">Editar 2</button>
                                    ) : (
                                        <button type="submit" >Editar 2</button>
                                    )
                                }

                                <button type="submit" id="agregar" onClick={
                                    (e) => {
                                        agregarPreguntas(e);
                                        //props.crearFormulario({pregunta});
                                    }
                                }>Agregar 2</button>

                            </main>
                        </div>
                    </section>

                </main>
            </div>
        </>
    )

}

export default ListaPreguntas