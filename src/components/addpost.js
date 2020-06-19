import React, { Component } from "react";

export default class addpost extends Component {
  state = {
    body: "",
    err: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.body === "" || this.state.body === null) {
      this.setState({ err: "Input text to comment" });

      return;
    } else {
      this.setState({ err: "" });
    }
    this.props.addPost(this.state.body);
    this.setState({ body: "" });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          rows="4"
          type="text"
          name="body"
          placeholder="type your comment..."
          value={this.state.body}
          onChange={this.onChange}
        ></textarea>
        <p className="error">{this.state.err}</p>
        <input type="submit" value="Submit" className="btn" />
      </form>
    );
  }
}
