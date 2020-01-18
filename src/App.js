import React from "react";
import "./App.css";
import Cardlist from "./CardList";
import { monsters } from "./monsters";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>Monster Hunter:World Virtual Hunter Notes</h1>
      <SearchBox />
      <Cardlist monsters={monsters} />
    </div>
  );
};

export default App;
