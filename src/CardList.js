import React from "react";
import Card from "./Card";

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((animal, i) => {
        return (
          <Card
            key={monsters[i].id}
            id={monsters[i].id}
            name={monsters[i].name}
            hp={monsters[i].hp}
            link={monsters[i].link}
          />
        );
      })}
    </div>
  );
};

export default CardList;
