import React from 'react';
import './app.css';

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>
					✖
				</button>
				{props.name}
			</span>

			<Counter />
		</div>
	);
};

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

class App extends React.Component {
	state = {
		players : [
			{
				name : 'Clinton',
				id   : 1,
			},
			{
				name : 'Rhi',
				id   : 2,
			},
			{
				name : 'Mark',
				id   : 3,
			},
			{
				name : 'Amanda',
				id   : 4,
			},
		],
	};

	handleRemovePlayer = (id) => {
		this.setState((prevState) => {
			return {
				players : prevState.players.filter((player) => player.id !== id),
			};
		});
	};

	render () {
		return (
			<div className="scoreboard">
				<Header
					/* prettier ignore */
					title="Scoreboard"
					totalPlayers={this.state.players.length}
				/>

				{/* Player List */}
				{this.state.players.map((player) => (
					<Player
						/* prettier ignore */
						name={player.name}
						id={player.id}
						key={player.id.toString()}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

export default App;
