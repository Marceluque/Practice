import './App.css';
import todoLogo from "./imagenes/todo-logo.jpg";
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="todo">
      <div className="todo-logo-contenedor">
        <img 
          src={todoLogo}
          className="todo-logo" />
      </div>
      <div className="todo-lista">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
