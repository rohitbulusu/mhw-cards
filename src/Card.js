import React from "react";
import "./Card.css";

const Card = ({ name, link, hp }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="monster" src={link} />
      <div>
        <h2>{name}</h2>
        <p>HP: {hp}</p>
      </div>
    </div>
  );
};

export default Card;
