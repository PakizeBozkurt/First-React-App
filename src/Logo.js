import React from "react";
import Title from "./Title";



const Logo = (props) => {

console.log(props);
  return (
    <div>
      <Title appName={props.appName} />
    </div>
  );
};
console.log();

export default Logo;