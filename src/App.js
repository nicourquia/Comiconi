import React, { Component }  from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
