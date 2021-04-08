import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Habit = (props) => {
  const handleIncrement = () => {
    props.onIncrement(props.habit);
  };

  const handleDecrement = () => {
    props.onDecrement(props.habit);
  };

  const handleDelete = () => {
    props.onDelete(props.habit);
  };

  const { name, count } = props.habit;
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinusSquare} />
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default Habit;
