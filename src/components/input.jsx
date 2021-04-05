import React, { Component } from "react";

class Input extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addHabit = () => {
    this.props.onAdd(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className="input-habit">
        <input placeholder="Habit" onChange={this.handleChange} value={this.state.inputValue} />
        <button className="input-addButton" onClick={this.addHabit}>
          Add
        </button>
      </div>
    );
  }
}

export default Input;
