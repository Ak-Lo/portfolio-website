import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="projects__card">
      <img src={process.env.PUBLIC_URL + `${props.image}`} alt="" />
      <h1>{`{0${props.id}.}`}</h1>
      <div className="card__body">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" className="card__button">
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default Card;
