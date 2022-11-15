import React from "react";

const BestPokemon = (probs) => {
  const { abilities } = probs;
  return (
    <div>
      <p>"My favorite Pokemon is Squirtle"</p>
      <ul>
        {abilities.map((abl) => (
          <li>{abl}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
