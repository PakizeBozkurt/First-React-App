import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Avatar from "./Avatar";
import Title from "./Title";

const App = () => {
  return (
    <div>
      <Logo name="Pokedex" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date = {new Date().toLocaleDateString()}/>
      <Avatar />
      <Title />
    </div>
  );
};
export default App;
