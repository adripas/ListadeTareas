import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from "./Tarea";

function ListaDeTareas(){

    // Use state: se usa el primer elemento del array es le estado, y el segundo elemento es una funcion que se usa para actualizar ese estado
    const [tareas, setTareas]= useState([]);  /* se coloca set antes del nombre de estado que se va acambiar*/

const agregarTarea = tarea=>{
    console.log("Tarea Agregada");
    console.log(tarea);
}
    return(
// Para no crear un div nuevo, se llama fragmentos en react
<>
    <TareaFormulario onSubmit={agregarTarea}/>
    <div className="tareas-lista-contenedor">
    {
        //   maps e sun emtodo qeu v aa tomar cada uno de esas tareas las va a pasar como argumento para otra funcion y va  a realizar lo que queremos
        tareas.map((tarea)=> 
        <Tarea 
        texto={tarea.texto}
        completada={tarea.completada}
         />
        ) 
   }
    </div>
</>
);
}
export default ListaDeTareas;