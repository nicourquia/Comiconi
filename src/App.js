import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter className="App">
      <Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
