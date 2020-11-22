import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const players = [
  {
    name: "Clinton",
    score: 100,
    key: 1,
  },
  {
    name: "Rhi",
    score: 10,
    key: 2,
  },
  {
    name: "Mark",
    score: 9,
    key: 3,
  },
  {
    name: "Amanda",
    score: 100,
    key: 4,
  },
];

ReactDOM.render(<App initialPlayers={players} />, document.getElementById("root"));
