import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>
        Count balls: <span>{props.balls}</span>
      </div>
      <div>
        Count strikes: <span>{props.strikes}</span>
      </div>
    </div>
  );
}
