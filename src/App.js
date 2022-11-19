import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Avatar from "./Avatar";
import Title from "./Title";



const App = () => {

function logWhenClicked() {
  console.log("Hey!");
}

function myclick2() {
  console.log("I'm the other avatar");
}
  return (
    <div>
      <Title appName={"Pokedex"} />
      <Logo  />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <Avatar doWhenClicked={logWhenClicked} msg="Hi" />
      <Avatar doWhenClicked={myclick2} msg="Hi" />
    </div>
  );
};
export default App;
