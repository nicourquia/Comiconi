import React, { Component }  from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CarWidget from './components/CarWidget';
import Navbar from './components/NavBar';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<CarWidget />} />
    </Routes>
  );
}

export default App;
