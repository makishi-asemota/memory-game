import React from "react";

export default function Scoreboard(props) {
  return (
    <div className="scoreHeader">
      <h1>Regular Show Memory Game</h1>
      <p>
        Get points by clicking a character, but don't click the same character
        twice!
      </p>
      <div className="score">
        <p>Current Score: {props.score}</p>
        <p>High Score: {props.bestScore}</p>
      </div>
    </div>
  );
}
