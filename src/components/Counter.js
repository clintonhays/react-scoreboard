import React from 'react';

const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <button className="counter-action decremement" onClick={() => changeScore(index, -1)}>
        -
      </button>
      <span className="counter-score"> {score} </span>
      <button className="counter-action incremement" onClick={() => changeScore(index, +1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
