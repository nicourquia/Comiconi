import React, { Component }  from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const info = {
    nombre: "Nicolas",
    apellido: "Urquia",
}

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer data={info}/>
      </header>
    </div>
  );
}

export default App;
