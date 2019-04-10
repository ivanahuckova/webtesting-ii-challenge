import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';

export default function GameContainer(props) {
  return (
    <div>
      <Dashboard
        foulFunction={props.foulFunction}
        strikeFunction={props.strikeFunction}
        ballFunction={props.ballFunction}
        hitFunction={props.hitFunction}
        strikes={props.strikes}
        balls={props.balls}
      />
      <Display strikes={props.strikes} balls={props.balls} />
    </div>
  );
}
