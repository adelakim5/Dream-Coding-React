import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <FontAwesomeIcon className="logo" icon={faLeaf} />
          Habit Tracker
          <span className="navbar-count">{this.props.totalCount}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
