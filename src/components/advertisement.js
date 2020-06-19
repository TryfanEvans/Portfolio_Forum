import React, { Component } from "react";

export default class advertisement extends Component {
  getImage = () => {
    //gets a random integer within the range of 200 to 600, in increments of 50
    //200 is only returned when math.Random() returns 0
    const advertisement_height = Math.ceil(Math.random() * 8 + 4) * 50;
    return `https://picsum.photos/300/${advertisement_height}`;
  };

  render() {
    return (
      <div className="advertisement">
        <p>ADVERTISEMENT</p>{" "}
        <img src={this.getImage()} alt="advertisement placeholder" />
      </div>
    );
  }
}
