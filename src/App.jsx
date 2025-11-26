import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Header from "./components/header.jsx";
import Listas from "./components/listas.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Listas />
    </>
  );
}

export default App;


