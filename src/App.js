import React from "react";
import "./app.css";

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
      <span className="player-name">{props.name}</span>

      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decremement"> - </button>
      <span className="counter-score"> {props.score} </span>
      <button className="counter-action incremement"> + </button>
    </div>
  );
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        /* prettier ignore */
        title="Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />

      {/* Player List */}
      {props.initialPlayers.map((player) => (
        <Player
          /* prettier ignore */
          name={player.name}
          score={player.score}
          key={player.key.toString()}
        />
      ))}
    </div>
  );
};

export default App;
