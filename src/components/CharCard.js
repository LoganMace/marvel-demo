import React from "react";
import { Link } from "react-router-dom";

export default function CharCard(props) {
  return (
    <div className="card">
      <Link to={`/char/${props.id}`}>
        <h3>{props.name}</h3>
        <img className="card-img" src={props.img} alt={props.name} />
      </Link>
    </div>
  );
}
