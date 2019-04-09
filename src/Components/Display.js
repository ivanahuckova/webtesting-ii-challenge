import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>Count balls: {props.balls}</div>
      <div>Count strikes: {props.strikes}</div>
    </div>
  );
}
