import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <section className="main">
          <Headline
            header="Post"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          ></Headline>
        </section>
      </div>
    );
  }
}

export default App;
