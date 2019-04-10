import React, { useState } from 'react';
import './App.css';

import GameContainer from './Components/GameContainer';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const foulFunction = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  const strikeFunction = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
    }
  };

  const ballFunction = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  };

  const hitFunction = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="App">
      <GameContainer
        foulFunction={foulFunction}
        strikeFunction={strikeFunction}
        ballFunction={ballFunction}
        hitFunction={hitFunction}
        strikes={strikes}
        setStrikes={setStrikes}
        balls={balls}
        setBalls={setBalls}
      />
    </div>
  );
}

export default App;
