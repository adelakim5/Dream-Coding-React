import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  addHabit = (name) => {
    this.props.onAdd(name);
  };

  resetAll = () => {
    this.props.onReset();
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.addHabit} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
          ))}
        </ul>
        <button className="reset-button" onClick={this.resetAll}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
