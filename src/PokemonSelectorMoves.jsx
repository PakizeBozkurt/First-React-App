import React, { useState } from "react";
import PokemonMovies from "./PokemonMovies";
function PokemonMovesSelector() {
  const [id, setId] = useState(null);
  function handleBulbasaurClick() {
    setId(1);
  }
  function handleCharmanderClick() {
    setId(4);
  }
  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {id ? <PokemonMovies pokemonId={id} /> : null}
    </div>
  );
}
export default PokemonMovesSelector;