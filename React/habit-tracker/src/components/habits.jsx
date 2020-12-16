import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
      // id는 반드시 고유한 번호여야 함
      // 그래서 배열의 index로 id를 매기면 안됨
    ],
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits]; // 직접 state를 수정하면 좋지 않기 때문에 배열을 복사한 것
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count > 0 ? habits[index].count - 1 : 0;
    this.setState({ habits });
    if (habits[index].count === 0) this.props.remove(habit);
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
    this.props.add(habit);
  };

  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // this.setState({ habits });
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        ))}
      </ul>
    );
  }
}

export default Habits;
