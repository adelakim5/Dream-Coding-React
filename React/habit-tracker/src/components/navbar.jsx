import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const count = this.props.count;
    return (
      <>
        <span>Habit Tracker</span>
        <span>{count}</span>
      </>
    );
  }
}

export default Navbar;
