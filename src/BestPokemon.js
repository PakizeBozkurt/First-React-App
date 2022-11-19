import React from "react";

const BestPokemon = (props) => {
  const { abilities } = props;
  return (
    <div>
      <p>"My favorite Pokemon is Squirtle"</p>
      <ul>
        {abilities.map((abl, index) => (
          <li key={index}>{abl}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
