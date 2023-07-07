import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

const[input, setinput] =useState('');

const manejarCambio = e =>{
setinput(e.target.value); /*extraer valor del campo del usuario*/

}

const manejarEnvio= e =>{

    e.preventDefault(); /* no se cargue toda la aplicacion cuando se envie el formulario*/
    const tareaNueva ={
        id:uuidv4(), /*paquete uuid*/
        texto:input,
        completada: false
    }
    props.onSubmit(tareaNueva);
}
    return (
<form className="tarea-formulario" onSubmit={manejarEnvio}>
        <input 
        className="tarea-input"
        type="text"
        placeholder="Escriba una tarea"
        name="texto"    
        onChange={manejarCambio}    
        />
        <button className="tarea-boton" onClick={console.log(props)}>Agregar Tarea</button>
        
</form>

    );
}

export default TareaFormulario;