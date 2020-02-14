import React from "react";
import "./playercard.css";

const Card = props => {
    
  return (
    <div className="container">

    <div className="cardContainer">
      <h1>Women Players</h1>
      <p>{props.name} <br />
      {props.country}
      </p>
    </div>

    </div>
  );
};

export default Card;
