import React from "react";
import Habit from "./habit";

const Habits = (props) => {
  return (
    <ul>
      {props.habits.map((habit) => (
        <Habit key={habit.id} habit={habit} onIncrement={props.onIncrement} onDecrement={props.onDecrement} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default Habits;
