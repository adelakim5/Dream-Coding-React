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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count > 0 ? habits[index].count - 1 : 0;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits].filter((e) => e !== habit);
    this.setState({ habits });
  };

  reset = () => {
    this.setState({ habits: [] });
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
