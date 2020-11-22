import React from 'react';
import PropTypes from 'prop-types';

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

Counter.propTypes = {
  index       : PropTypes.number,
  score       : PropTypes.number,
  changeScore : PropTypes.func,
};

export default Counter;
