import React from "react";
import "./playercard.css";

const Card = props => {
    
  return (
    <div className="container">

    <div className="cardContainer">
      <h1>Women Players</h1>
      <p>{props.name} <br />
      <br />
      I am from the:<br />
      {props.country} <br /><br />
      I have been looked up:<br />
      {props.searches}
      </p>
    </div>

    </div>
  );
};

export default Card;
