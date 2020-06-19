import React, { Component } from "react";
import Axios from "axios";

export default class title extends Component {
  getCapitalisedTitle = (str) => {
    str = str.split(" ");
    str.forEach(function (word, index) {
      word = word.split("");
      word[0] = word[0].toUpperCase();

      str[index] = word.join("");
    }, str); // use arr as this

    return str.join(" ");
  };

  getCapitalisedSentence = (str) => {
    str = str.split("");
    str[0] = str[0].toUpperCase();

    return str.join("");
  };

  state = {
    title: "",
    body: "",
  };
  constructor(props) {
    super(props);

    Axios.get("https://jsonplaceholder.typicode.com/comments/21")
      .then((res) => {
        //ignore the error, async logic is confusing google chrome
        this.setState({ name: this.getCapitalisedTitle(res.data.name) + "?" });
        this.setState({ body: this.getCapitalisedSentence(res.data.body) });
      })
      .catch((error) => console.log({ error }));
  }
  render() {
    return (
      <div className="title">
        <h2> {this.state.name}</h2>
        <p> {this.state.body}</p>
        <img src="https://picsum.photos/600/300" alt="placeholder image" />
      </div>
    );
  }
}
