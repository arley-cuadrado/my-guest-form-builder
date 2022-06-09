import React, { useState } from "react"
import { nanoid } from 'nanoid'
//import ListaPreguntas from './ListaPreguntas-ELIMINAR'

import Close from '../../Images/icon/close.svg'

const Forms = function () {

    //-------------------------------

    const [tituloFormulario, setPregunta] = useState('')
    const [formularios, setPreguntas] = useState([])
    const [descripcion, setDescripcion] = useState('')
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const agregarPregunta = e => {
        e.preventDefault()
        if (!tituloFormulario.trim()) {
            console.log('Elemento vacio 2')
            setError('El campo no puede estar vacío 2')
            return
        }

        setPreguntas([
            ...formularios,
            { id: nanoid(), nombrePregunta: tituloFormulario, descripcionFormulario: descripcion },
        ])
        setPregunta('')
        setDescripcion('')
        setError(null)

    }

    const eliminarPregunta = id => {
        const arrayFiltrado = formularios.filter(item => item.id !== id)
        setPreguntas(arrayFiltrado)
        setDescripcion(arrayFiltrado)
        //console.log(id)
    }

    const editarPregunta = e => {
        e.preventDefault()
        if (!tituloFormulario.trim()) {
            console.log('Elemento vacio')
            setError('El campo no puede estar vacío')
            return
        }

        const arrayEditado = formularios.map(
            item => item.id === id ? { id: id, nombrePregunta: tituloFormulario, descripcionFormulario: descripcion } : item
        )

        setPreguntas(arrayEditado)
        setModoEdicion(false)
        setPregunta('')
        setDescripcion('')
        setId('')
        setError(null)
    }

    // ------- Crear formulario -------

    const crearFormulario = (e , pregunta) => {
        //const { pregunta } = this.props;
        e.preventDefault();
        console.log('Formulario creado!' + JSON.stringify(formularios))
        console.log(`PREGUNTAS AQUÍ DOS: ${pregunta}`)
    }

    //const [ datosHijo, setDatosHijo ] = useState('')

    return (
        <>

            <div className="center-main left-main">
                <main className="padding cien"> {/* key={nanoid()} */}

                    {/* ------------------------------------------ */}
                    <section className="flexbox flexbox-column title-form form-style">

                        <div className="form-add cien">
                            <h2>
                                {
                                    modoEdicion ? 'Editar formulario' : 'Agregar formulario'
                                }
                            </h2>

                            <form onSubmit={
                                crearFormulario

                            }
                                className="lista-formularios">
                                <div className="form-input">

                                    <section className="title-form form-style form-style-title margen-none">
                                        <div className="form-input">
                                            <input id=""
                                                type="text"
                                                name="tituloformulario"
                                                placeholder="Titulo"
                                                className="input-title"
                                                value={tituloFormulario}
                                                onChange={e => setPregunta(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-input">
                                            <textarea id=""
                                                name="descripcion"
                                                rows="4" cols="50"
                                                placeholder="Descripción..."
                                                className="input-info"

                                                type="text"
                                                value={descripcion}
                                                onChange={e => setDescripcion(e.target.value)}
                                            >
                                            </textarea>
                                        </div>
                                    </section>

                                </div>
                                {
                                    error ? <span className="error-message">{error}</span> : null
                                }

                                {
                                    modoEdicion ? (
                                        <button type="submit" id="agregar">Editar 1</button>
                                    ) : (
                                        <button type="submit" onClick={modoEdicion ? editarPregunta : agregarPregunta}>Agregar 1</button>
                                    )
                                }

                                <div>
                                    {/*<button onClick={ (e) => crearFormulario(e) }>Crear formulario</button>*/}
                                    <button>Crear formulario</button>
                                </div>

                                <div className="cien m-right">
                                    <h2>Lista de formularios</h2>
                                    <ul>
                                        {
                                            formularios.length === 0 ? (
                                                <li className="empty">No hay formularios</li>
                                            ) : (
                                                formularios.map(item => (
                                                    <li key={item.id}>

                                                        <article className="lista-preguntas">

                                                            <div className="pregunta-input-gray cien"><span>{item.nombrePregunta}</span></div>

                                                            <button onClick={() => eliminarPregunta(item.id)}>
                                                                <img src={Close} alt="" />
                                                            </button>
                                                        </article>
                                                        <p>{item.descripcionFormulario}</p>
                                                        {/* <ListaPreguntas /> */}
                                                    </li>
                                                ))
                                            )
                                        }
                                    </ul>
                                </div>
                            </form>
                        </div>

                    </section>

                </main>

            </div>
        </>
    )

}

export default Forms