import React, { useState, useEffect } from "react";
import RegularShow from "./RegularShow.json";
import GameCard from "./GameCard";

const shuffleCards = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[random];
    cards[random] = temp;
  }
  return cards;
};

const GameBoard = (props) => {
  const [characters, setCharacters] = useState(() => shuffleCards(RegularShow));

  const handleClick = (e) => {
    if (e.clicked === false) {
      props.setScore((prev) => prev + 1);
      e.clicked = true;
    } else {
      characters.map((character) => (character.clicked = false));
      props.setScore(0);
    }
  };

  useEffect(() => {
    setCharacters(shuffleCards(characters));
  }, [props.score]);

  const board = characters.map((character) => {
    return (
      <GameCard
        click={() => handleClick(character)}
        character={character}
        key={character.id}
      />
    );
  });

  return <div className="gameContainer">{board}</div>;
};

export default GameBoard;
