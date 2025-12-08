import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isLogged = localStorage.getItem("auth") === "true";

  return !isLogged ? children : <Navigate to="/pagina1" />;
}