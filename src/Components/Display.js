import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>
        Count balls: <span data-testid="ballsid">{props.balls}</span>
      </div>
      <div>
        Count strikes: <span data-testid="strikesid">{props.strikes}</span>
      </div>
    </div>
  );
}
