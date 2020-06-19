import React, { Component } from "react";
import "./style.css";
import Advertisement from "./advertisement.js";

export default class Sidebar extends Component {
  render() {
    return (
      //A workaround for return not supporting for loops
      <div className="sidebar">
        {[...Array(3)].map((empty_var, key) => (
          <Advertisement key={key} />
        ))}
      </div>
    );
  }
}
