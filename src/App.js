import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="main">
        <Headline header="Post" desc="Click the button to render posts!"></Headline>
      </section>
    </div>
  );
}

export default App;
