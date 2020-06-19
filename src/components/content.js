import React, { Component } from "react";
import Posts from "./posts.js";
import Sidebar from "./sidebar.js";

import "./style.css";

export default class content extends Component {
  render() {
    return (
      <div className="content">
        <Posts />
        <Sidebar />
      </div>
    );
  }
}
