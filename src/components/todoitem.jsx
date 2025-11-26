import React, { useState } from "react"

function todoitem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, value);
    setIsEditing(false);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleEdit}>Guardar</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </>
      )}
    </li>
  );
}

export default todoitem;