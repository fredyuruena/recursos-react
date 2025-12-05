import React from "react";
import { useNavigate } from "react-router-dom";
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


function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header style={{ padding: "1rem", background: "#282c34", color: "white" }}>
      <h1>To Do List Primer actividad - React</h1>
      <button onClick={logout} style={{ marginLeft: "20px" }}>
        Cerrar sesión
      </button>
    </header>
  );
}

export default header;
