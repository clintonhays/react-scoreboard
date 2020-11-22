import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
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
