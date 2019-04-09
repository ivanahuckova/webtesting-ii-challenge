import React, { Component, useState } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard';
import Display from './Components/Display';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const foulFunction = () => {
    if (strikes <= 1) {
      setStrikes(strikes + 1);
    }
  };

  return (
    <div className="App">
      <Dashboard strikes={strikes} setStrikes={setStrikes} setBalls={setBalls} balls={balls} foulFunction={foulFunction} />
      <Display strikes={strikes} balls={balls} />
    </div>
  );
}

export default App;
