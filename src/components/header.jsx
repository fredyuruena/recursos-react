import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("auth") === "true";

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <header
      style={{
        padding: "1.5rem 1rem", 
        background: "#282c34",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", 
        maxWidth: "100%", 
      }}
    >
      <h2 style={{ margin: 0 }}>Mi Proyecto React</h2>

      <nav
        style={{
          display: "flex",
          alignItems: "center", 
          gap: "1.2rem",
        }}
      >
        <Link to="/pagina1" style={{ color: "white", textDecoration: "none" }}>
          To do list
        </Link>

        <Link to="/pagina2" style={{ color: "white", textDecoration: "none" }}>
          Crud
        </Link>

        {!isLogged ? (
          <Link
            to="/login"
            style={{
              color: "yellow",
              fontWeight: "bold",
              textDecoration: "none",
              border: "1px solid yellow",
              padding: "0.4rem 0.7rem",
              borderRadius: "5px",
            }}
          >
           No estas Logeado
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "0.4rem 0.7rem",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Salir de la sesión
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;