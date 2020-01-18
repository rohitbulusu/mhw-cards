import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="photo" src={props.link} />
      <div>
        <h2>{props.name}</h2>
        <p>HP: {props.hp}</p>
      </div>
    </div>
  );
};

export default Card;
