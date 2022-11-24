import React, { useState } from "react";
import { Button } from "react-bootstrap";
import pokemans from "json-pokemon";

const CaughtPokemon = (props) => {
  const random = Math.floor(Math.random() * pokemans.length);
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => {
    setCaught(caught.concat(pokemans[random].name));
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <Button onClick={catchPokemon}>click me</Button>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
