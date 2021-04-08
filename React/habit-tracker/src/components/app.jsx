import React, { Component } from "react";
import Navbar from "./navbar";
import Habits from "./habits";

class App extends Component {
  state = {
    addedItems: [],
  };
  add = (habit) => {
    const items = [...addedItems].filter((item) => item.id !== habit.id);
    items.push(habit);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <Navbar count={this.state.addedItems.length} />
        <Habits add={this.add} />
      </div>
    );
  }
}

export default App;
