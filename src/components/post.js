import React, { Component } from "react";
import "./style.css";

export default class post extends Component {
  render() {
    return (
      <div className="post">
        <h3>{this.props.comment.name}</h3>
        <p>{this.props.comment.body}</p>
      </div>
    );
  }
}
