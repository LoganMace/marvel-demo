import React from "react";
import { Link } from "react-router-dom";

export default function CharCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img className="card-img" src={props.img} alt={props.name} />
    </div>
  );
}
