import React from "react";
import "./App.css";

import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import PokemonMovies from "./PokemonMovies";
import PokemonSelectorMoves from "./PokemonSelectorMoves";
import PokemonCity from "./PokemonCity";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
        <PokemonMovies />
        <PokemonSelectorMoves />
        <PokemonCity />
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/best-pokemon">Best Pokemon</Link>
                </li>
                <li>
                  <Link to="/caught-pokemon">Best Pokemon</Link>
                </li>
              </ul>
            </nav>
          </div>
        </BrowserRouter>
      </div>
    );
  }
export default App;
