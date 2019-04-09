import React, { useState } from 'react';
import './App.css';

import GameContainer from './Components/GameContainer';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div className="App">
      <GameContainer strikes={strikes} setStrikes={setStrikes} balls={balls} setBalls={setBalls} />
    </div>
  );
}

export default App;
