import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Daniel" age="35"/>
        <Person name="Max" age="28"/>
        <Person name="Dima" age="25">My Hobbies: Kiteboarding, Rock Climbing, Being Cute</Person>
      </div>
    );
  }
}

export default App;
