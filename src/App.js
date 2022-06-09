import "react-nestable/dist/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Styles/Styles.css'

// Import routes Path
/*
import { LOGIN, PRIVATE } from './components/Config/Router/Paths'
*/
import HomeLog from "./components/HomeLog/HomeLog";
import HomeProfile from "./components/HomeProfile/HomeProfile";
import { useState } from "react";

const App = () => {
 
  //if( isLoading ) return <h1>Cargando...</h1>
  const [ bgGreen, setBgGreen ] = useState('green')

  const isAuthenticated = true;
  /*
  if( isAuthenticated == true ){
  }
  */

  return (
    <div className="App">
    { isAuthenticated ? <HomeProfile /> : <HomeLog isAuthenticated={isAuthenticated} /> }
    </div>
  );
};

export default App;







