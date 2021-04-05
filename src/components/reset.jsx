import React, { Component } from "react";

class Reset extends Component {
  reset = () => {
    this.props.onReset();
  };
  render() {
    return (
      <button className="resetAll-button" onClick={this.reset}>
        Reset All
      </button>
    );
  }
}

export default Reset;
