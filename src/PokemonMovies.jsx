 import React, {useEffect, useState} from 'react';
//import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

 function PokemonMovies(props) {
     const[pokemonData, setpokemonData] = useState(null);
     useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            setpokemonData(data)
        })
        .catch((error) => console.log(error));
    }, [props.pokemonId]);
  return (
    <div>
         {pokemonData ? (
   
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    
   
     ) : ( null)
  

         } </div>
  )
}

export default PokemonMovies;
