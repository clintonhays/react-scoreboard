import React from 'react';

const Counter = (props) => {
	let index = props.index;

	return (
		<div className="counter">
			<button className="counter-action decremement" onClick={() => props.changeScore(index, -1)}>
				-
			</button>
			<span className="counter-score"> {props.score} </span>
			<button className="counter-action incremement" onClick={() => props.changeScore(index, +1)}>
				+
			</button>
		</div>
	);
};

export default Counter;
