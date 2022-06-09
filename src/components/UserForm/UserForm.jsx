import { Fragment } from "react"; // useState, 
//Material UI Components
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const UserForm = ({ value, defaultValue, required, defaultValueOptions, defaultValueParagraph, handleValue, deleteEl, handleRequired, handleElType, duplicateElement }) => {

  const questionDefault = [
    { valueQuestion: 'Te gusta la cerveza de Malta?' },
    { valueQuestion: 'Si tu respuesta es Si, podrías darnos más detalles?' },
    { valueQuestion: 'Cuentanos cuantos años tienes' },
  ];
  //const questions = [value];


  /*const [ todos, setTodos ] = useState(value)*/
  //const preguntas = [value];
  console.log('Opción Texto ' + value);
  console.log('Test props Radio: ' + defaultValue);
  console.log('Opción checked: ' + required)
  console.log('Optiones si no: ' + defaultValueOptions)
  console.log('Opción párrafo: ' + defaultValueParagraph)

  //console.log('Prgeunta creada: ' + JSON.stringify(value))

  const enviarLista = () => {
    console.log('Prgeunta creada: ' + JSON.stringify(questionDefault))
    //console.log('Prgeunta creada: ' + JSON.stringify(questions))
  }


  return (
    <Fragment>
      <hr />

      <Paper elevation={1}>
        <Box sx={{ p: 3 }}>
          <Grid container > {/* spacing={1} xs={9} */}

            <Box sx={{ p: 3 }}>
              <div className="left">
                <h2>Formulario de respuestas</h2>
              </div>
              {
                questionDefault.map(item => (
                  <>
                    <Grid container sx={{ p: 3 }} className="left">
                      <div><strong>Pregunta: {item.valueQuestion}</strong></div>
                      {/*<p>AQUÍ: { item.valueQuestion }</p>*/}
                    </Grid>

                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Responde la pregunta"
                      enabled
                    />
                  </>
                ))
              }
              <Grid>
                {/* Botón enviar respuestas */}
                <Grid container direction="row" className="boton-crear-align left" sx={{ p: 3 }}>
                  <button className="boton-crear" onClick={() => enviarLista()}>Enviar respuestas</button>
                </Grid>
              </Grid>
            </Box>

          </Grid>
        </Box>
      </Paper>

    </Fragment>
  );
};

export default UserForm;
