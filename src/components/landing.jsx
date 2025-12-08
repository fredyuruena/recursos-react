import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Landing() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "fredy.durango@ene8.com.mx" && password === "123456") {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "350px", margin: "50px auto" }}>
      <h1>Bienvenido a mis actividades</h1>
      <p>Por favor inicia sesión para continuar.</p>

      <form onSubmit={handleLogin} style={{ marginTop: "1rem" }}>
        <input
  type="email"
  placeholder="Correo electrónico"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  style={{
    background: "white",
    color: "black",
    padding: "8px",
    borderRadius: "5px",
    width: "100%",
    border: "1px solid #ccc"
  }}
/>

<br /><br />

<input
  type="password"
  placeholder="Contraseña"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  style={{
    background: "white",
    color: "black",
    padding: "8px",
    borderRadius: "5px",
    width: "100%",
    border: "1px solid #ccc"
  }}
/>

        <button
        type="submit"
        style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#4a90e2",
            color: "white",
            cursor: "pointer",
            width: "100%"
        }}
        >
        Ingresar
        </button>
      </form>
    </div>
  );
}
