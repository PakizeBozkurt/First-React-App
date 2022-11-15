import React from "react";
import Title from "./Title";



const Logo = () => {
  const appName = "Pokedex";
  return (
    <header>
      <Title appName={appName} fabulous="true" />
    </header>
  );
};
console.log();

export default Logo;