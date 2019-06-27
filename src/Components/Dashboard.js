import React from 'react';

export default function Dashboard(props) {
  return (
    <div>
      <button data-testid="strikefn" onClick={props.strikeFunction}>
        strike
      </button>
      <button onClick={props.ballFunction}>ball</button>
      <button onClick={props.foulFunction}>foul</button>
      <button onClick={props.hitFunction}>hit</button>
    </div>
  );
}
