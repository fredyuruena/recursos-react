import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogged = localStorage.getItem("auth") === "true";

  return isLogged ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
