import React from "react";

function header() {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#2c2c2c", // gris más claro
        color: "white",
        textAlign: "center",
        borderRadius: "8px",
        marginBottom: "20px"
      }}
    >
      <h1>To Do List - Primer actividad en React</h1>
    </header>
  );
}

export default header;
