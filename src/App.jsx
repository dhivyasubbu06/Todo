import React, { useState } from "react";

function App() {
  
  const [task, setTask] = useState("");
 
  const [tasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); 
      setTask(""); 
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>

   
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
