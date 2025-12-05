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

function App() {
  return (
    <>
    <>
      <Routes>
        {/* RUTA PÚBLICA */}
        <Route path="/login" element={<Login />} />

        {/*  RUTAS PROTEGIDAS */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Listas />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
    </>
  );
}

export default App;


