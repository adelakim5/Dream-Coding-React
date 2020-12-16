import "./app.css";
// import React from "react";
// import Habits from "./components/habits";

// function App() {
//   return <Habits/>
// }

import React, { Component } from "react";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

class App extends Component {
  state = {
    items: [],
  };
  add = (habit) => {
    const items = this.state.items.length > 0 ? [...this.state.items].filter((item) => item.id !== habit.id) : [];
    items.push(habit);
    this.setState({ items });
  };
  remove = (habit) => {
    const items = [...this.state.items].filter((item) => item.id !== habit.id);
    this.setState({ items });
  };
  render() {
    return (
      <div>
        <Navbar count={this.state.items.length} />
        <Habits add={this.add} remove={this.remove} />
      </div>
    );
  }
}

export default App;

// export default App;
