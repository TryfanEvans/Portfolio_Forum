import React from "react";
import Content from "./components/content.js";
import Navigationbar from "./components/navigationbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/title.js";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Router>
        <Route path="/title" render={(props) => <Title />} />
        <Route path="/" render={(props) => <Content />} />
      </Router>
    </div>
  );
}

export default App;
