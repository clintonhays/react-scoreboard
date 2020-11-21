import React from 'react';
import './app.css';

const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Clinton</span>

      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decremement"> - </button>
      <span className="counter-score"> 10 </span>
      <button className="counter-action incremement"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      {/* Player List */}
      <Player />
    </div>
  );
};

export default App;
