import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <h2>{props.msg}</h2>
      <img
        onClick={props.doWhenClicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />{" "}
    </div>
  );
};


export default Avatar;
