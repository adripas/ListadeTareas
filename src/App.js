import './App.css';
import freeCodeCampLogo from './imagenes/logo.PNG';
import './componentes/Tarea.js';
// import Tarea from './componentes/Tarea.js';
import TareaFormulario from './componentes/TareaFormulario.js';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
<div className='aplicacion-tareas'>
   <div className='freecodecamp-logo-contenedor'>
      <img 
      src = {freeCodeCampLogo}
      className='freecodecamp-logo'
      
      />
    </div>
    <div className='tareas-lista-principal'>
      <h1>Mis Tareas </h1>
      {/* <Tarea texto="Aprender React" completada={true}/> */}
      <ListaDeTareas />
         
    </div>
  </div>
  );
}

export default App;