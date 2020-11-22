import React, { Component } from 'react';
import AddPlayerForm from './AddPlayerForm';
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

  //   player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score : (prevState.players[index].score += delta),
      };
    });
  };

  getHiScore = () => {
    const scores = this.state.players.map((player) => player.score);
    const hiScore = Math.max(...scores);

    if (hiScore) {
      return hiScore;
    }
    return null;
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players : [
          ...prevState.players,
          {
            name,
            score : 0,
            id    : (this.prevPlayerId += 1),
          },
        ],
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
    const hiScore = this.getHiScore();

    return (
      <div className="scoreboard">
        <Header
          /* prettier ignore */
          players={this.state.players}
        />

        {/* Player List */}
        {this.state.players.map((player, index) => (
          <Player
            /* prettier ignore */
            name={player.name}
            score={player.score}
            isHiScore={hiScore === player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
