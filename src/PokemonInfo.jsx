import React, {useParams} from 'react';





function PokemonInfo() {
    let { name } = useParams();
    return <h2>Pokemon: {name}</h2>;
  
}

export default PokemonInfo;
