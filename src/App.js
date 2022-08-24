import "./App.css";
import React, { useState, useEffect } from "react";
import Scoreboard from "./Components/Scoreboard";
import GameBoard from "./Components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <div>
      <Scoreboard score={score} bestScore={bestScore} />
      <GameBoard setScore={setScore} score={score} />
    </div>
  );
}

export default App;
