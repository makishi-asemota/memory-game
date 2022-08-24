import React from "react";

const GameCard = (props) => {
  return (
    <div className="card">
      <div onClick={props.click} className="photo">
        <img src={props.character.photoURL} alt="character"></img>
      </div>
      <div className="name">{props.character.name}</div>
    </div>
  );
};

export default GameCard;
