import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players : [
      {
        name  : 'Clinton',
        score : 0,
        id    : 1,
      },
      {
        name  : 'Rhi',
        score : 0,
        id    : 2,
      },
      {
        name  : 'Mark',
        score : 0,
        id    : 3,
      },
      {
        name  : 'Amanda',
        score : 0,
        id    : 4,
      },
    ],
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score : (prevState.players[index].score += delta),
      };
    });
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
          players={this.state.players}
        />

        {/* Player List */}
        {this.state.players.map((player, index) => (
          <Player
            /* prettier ignore */
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
