import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hii I am React </h1>
        <Person name="jatin" age="29"/>
        <Person name="ginni" age="27"> Good girl </Person>
        <Person name="avi" age="2"/>
      </div>
    );
  }
}

export default App;
