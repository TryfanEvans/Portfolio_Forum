import React, { Component } from "react";
import axios from "axios";
import Post from "./post.js";
import Loading from "./loading.js";
import AddPost from "./addpost.js";
import Title from "./title.js";
import "./style.css";

export default class Posts extends Component {
  state = {
    comments: [],
    loaded: false,
  };

  getEnlargedBody = (str) => {
    //gets a random integer within the range of 1 to 7
    //1 is added for the unlikely case that math.Random() returns 0
    const num_blocks = Math.ceil(Math.random() * 7 + 1);
    //repeats the str input, giving each comment a random size

    var body = "";
    for (var i = 0; i < num_blocks; i++) {
      body += str;
    }
    return body;
  };

  getCapitalisedSentence = (str) => {
    str = str.split("");
    str[0] = str[0].toUpperCase();

    return str.join("");
  };

  getCapitalisedTitle = (str) => {
    str = str.split(" ");
    str.forEach(function (word, index) {
      word = word.split("");
      word[0] = word[0].toUpperCase();

      str[index] = word.join("");
    }, str); // use arr as this

    return str.join(" ");
  };
  addPost = (body) => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", {
        name: "guest",
        body,
      })
      .then((res) => {
        this.setState({ comments: [...this.state.comments, res.data] });
      })
      .catch((res) => {});
  };

  getNumComments = () => Math.ceil(Math.random() * 20);

  constructor(props) {
    super(props);

    axios
      //WARNING: templating causes a cors error
      .get(
        "https://jsonplaceholder.typicode.com/comments?_limit=" +
          this.getNumComments()
      )
      .then((res) => {
        //modifies the data with a single setState
        this.state.comments = res.data;

        this.state.comments.forEach((comment) => {
          comment.body = this.getEnlargedBody(comment.body);
          comment.body = this.getCapitalisedSentence(comment.body);
          comment.name = this.getCapitalisedTitle(comment.name);
        });
        //ignore the error, async logic has confused google chrome
        this.setState({ loaded: true });
        console.log("ignore the error, async logic has confused the browser");
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      //renders in reverse order so new comments go at the top
      <div className="posts">
        <Title />
        <AddPost addPost={this.addPost} />

        <Loading loaded={this.state.loaded} />

        {this.state.comments.reverse().map((comment) => {
          return <Post comment={comment} key={comment.id} />;
        })}
      </div>
    );
  }
}
