import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "fredy.durango@ene8.com.mx" && password === "123456") {

      // Guardamos el acceso
      localStorage.setItem("auth", "true");

      // Enviamos a la página 1 (To-Do List)
      navigate("/pagina1");

    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
