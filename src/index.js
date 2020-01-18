import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import "tachyons";
import { monsters } from "./monsters";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <Card id={monsters[0].id} name={monsters[0].name} hp={monsters[0].hp} />
    <Card id={monsters[1].id} name={monsters[1].name} hp={monsters[1].hp} />
    <Card id={monsters[2].id} name={monsters[2].name} hp={monsters[2].hp} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
