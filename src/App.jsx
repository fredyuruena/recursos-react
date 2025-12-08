import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Header from "./components/header.jsx";
import Listas from "./components/listas.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import PaginaDos from "./components/paginaDos.jsx";
import PublicRoute from "./publicRoute.jsx";
import Landing from './components/landing.jsx';

function App() {
  const isLogged = localStorage.getItem("auth") === "true";

  return (
    <>
      {/*solo si login activoo*/}
      {isLogged && <Header />}

      <Routes>

        {/* Publica*/}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />

        {/* Publica*/}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/*privada */}
        <Route
          path="/pagina1"
          element={
            <ProtectedRoute>
              <Listas />
            </ProtectedRoute>
          }
        />

        {/* privada*/}
        <Route
          path="/pagina2"
          element={
            <ProtectedRoute>
              <PaginaDos />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;