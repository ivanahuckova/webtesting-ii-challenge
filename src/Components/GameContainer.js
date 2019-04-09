import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';

export default function GameContainer(props) {
  return (
    <div>
      <Dashboard strikes={props.strikes} setStrikes={props.setStrikes} setBalls={props.setBalls} balls={props.balls} />
      <Display strikes={props.strikes} balls={props.balls} />
    </div>
  );
}
