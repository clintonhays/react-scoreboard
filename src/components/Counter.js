import React from 'react';

class Counter extends React.Component {
	state = {
		score : 0,
	};

	incrementScore = () => {
		this.setState((prevState) => {
			return {
				score : prevState.score + 1,
			};
		});
	};

	decrementScore = () => {
		this.setState((prevState) => {
			return {
				score : prevState.score - 1,
			};
		});
	};

	handleScoreChange () {}

	render () {
		return (
			<div className="counter">
				<button className="counter-action decremement" onClick={this.decrementScore}>
					-
				</button>
				<span className="counter-score"> {this.state.score} </span>
				<button className="counter-action incremement" onClick={this.incrementScore}>
					+
				</button>
			</div>
		);
	}
}

export default Counter;
