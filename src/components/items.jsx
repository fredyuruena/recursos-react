import React, { useState } from "react";

function items({ task, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  const handleSave = () => {
    onEdit(task.id, value);
    setEditing(false);
  };

  return (
    <li
      style={{
        background: "#2c2c2c",
        padding: "12px 16px",
        marginBottom: "10px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        border: "1px solid #3a3a3a"
      }}
    >
      {editing ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              flex: 1,
              marginRight: "10px",
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid #555",
              background: "#1e1e1e",
              color: "white"
            }}
          />

          <button
            onClick={handleSave}
            style={{
              background: "#4caf50",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Guardar
          </button>
        </>
      ) : (
        <>
          <span style={{ flex: 1 }}>{task.text}</span>

          <button
            onClick={() => setEditing(true)}
            style={{
              background: "#2196f3",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              marginRight: "8px",
              cursor: "pointer"
            }}
          >
            Editar
          </button>

          <button
            onClick={() => onDelete(task.id)}
            style={{
              background: "#ff5555",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Eliminar
          </button>
        </>
      )}
    </li>
  );
}

export default items;