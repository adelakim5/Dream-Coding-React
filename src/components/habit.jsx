import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Habit = (props) => {
  const { name, count } = props.habit;
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={(_) => props.onIncrement(props.habit)}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <button className="habit-button habit-decrease" onClick={(_) => props.onDecrement(props.habit)}>
        <FontAwesomeIcon icon={faMinusSquare} />
      </button>
      <button className="habit-button habit-delete" onClick={(_) => props.onDelete(props.habit)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default Habit;
