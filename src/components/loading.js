import React, { Component } from "react";

export default class loading extends Component {
  isLoading = () => {
    return { display: this.props.loaded ? "none" : "block" };
  };

  render() {
    return (
      <div className="loading" style={this.isLoading()}>
        <div
          className="fa fa-spinner fa-spin fa-5x"
          style={{ width: "14rem" }}
        ></div>
        <p> Getting response from Json Placeholder...</p>
      </div>
    );
  }
}
