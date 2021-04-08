import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => (
  <nav>
    <div className="navbar">
      <FontAwesomeIcon className="logo" icon={faLeaf} />
      Habit Tracker
      <span className="navbar-count">{props.totalCount}</span>
    </div>
  </nav>
);

export default Navbar;
