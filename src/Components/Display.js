import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>
        Count balls: <span data-testid="balls">{props.balls}</span>
      </div>
      <div>
        Count strikes: <span data-testid="strikes">{props.strikes}</span>
      </div>
    </div>
  );
}
