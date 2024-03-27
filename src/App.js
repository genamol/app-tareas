import "./App.css";
import Logo from "./components/Logo.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="tareas-container">
        <h1>Lista de tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
