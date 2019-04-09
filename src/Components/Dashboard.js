import React from 'react';

export default function Dashboard(props) {
  const { strikes, balls, setStrikes, setBalls } = props;

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
    <div>
      <button onClick={strikeFunction}>strike</button>
      <button onClick={ballFunction}>ball</button>
      <button onClick={foulFunction}>foul</button>
      <button onClick={hitFunction}>hit</button>
    </div>
  );
}
