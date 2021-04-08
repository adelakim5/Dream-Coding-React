import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { title, content } = props.card;
  return (
    <li className="card">
      <span className="card-info">
        <strong className="card-title">{title}</strong>
        <p className="card-content">{content}</p>
        {/* <span className="card-date">{props.key}</span> */}
      </span>
      <button className="card-button card-delete" onClick={() => props.onDelete(props.card)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
};

export default Card;
