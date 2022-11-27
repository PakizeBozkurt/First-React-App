import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
function handleCity(event) {
    setCity(event.target.value)
}
  return (
    <div>
      <p>Welcome to the city of {city}</p>
      <input type="text"
      value={city}
      onChange={handleCity}
      />

    </div>
  );
}

export default PokemonCity;
