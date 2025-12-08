import React, { useState } from "react";
import Items from "./items.jsx";

function listas() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Mis tareas</h2>

      <div>
        <input
          placeholder="Nueva tarea..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
  onClick={addTask}
  style={{
    background: "#4caf50",   // verdesito
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    marginLeft: "8px",
    cursor: "pointer"
  }}
>
  Agregar
</button>
      </div>

      <div
  style={{
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px",
    width: "90%",          
    maxWidth: "900px",     
    marginLeft: "auto",
    marginRight: "auto"
  }}
>
  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
    {tasks.map((task) => (
      <Items
        key={task.id}
        task={task}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    ))}
  </ul>
</div>
    </div>
  );
}

export default listas;