import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  return (
    <div className="App">
      <p></p>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
