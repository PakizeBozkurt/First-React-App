import React from "react";
import "./App.css";

import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";


const appName = "Pokedex";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();

  function App() {
    const doWhenClicked = () => {
      console.log("hello");
    };
    return (
      <div>
        <Logo appName={appName} click={doWhenClicked} />
        <BestPokemon abilities={abilities} />
        <CaughtPokemon date={date} />
      </div>
    );
  }
export default App;
