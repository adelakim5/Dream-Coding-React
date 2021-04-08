import { Component } from "react";
import "./app.css";
// import Habit from "./components/habit";
import Habits from "./components/habits";
import Input from "./components/input";
import Navbar from "./components/navbar";
import Reset from "./components/reset";

class App extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Running", count: 0, id: 2 },
      { name: "Coding", count: 0, id: 3 },
    ],
  };

  addHabit = (newHabit) => {
    const habits = [...this.state.habits]; // 여기서 바로 push하면 안됨
    if (newHabit !== "") habits.push({ name: newHabit, count: 0, id: this.state.habits.length + 1 }); // 여기서 push를 하면 잘 됨. 또 위에서 그냥 뒤에 넣어주는건 잘됨. 왜지?
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // count만 새로운 값으로 덮어쓰기
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count >= 0 ? count : 0 }; // count만 새로운 값으로 덮어쓰기
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits].filter((e) => e !== habit);
    this.setState({ habits });
  };

  reset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) return { ...habit, count: 0 };
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.reduce((acc, val) => (acc += val.count), 0)} />
        <Input onAdd={this.addHabit} />
        <Habits habits={this.state.habits} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        <Reset onReset={this.reset} />
      </>
    );
  }
}

export default App;
