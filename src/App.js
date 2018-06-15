import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jatin', age : 29},
      {name: 'Ginni', age : 27},
      {name: 'Avi',   age : 2}
    ]
  }

  switchNameHandler = (newName,newName2) => {
    //console.log("I was clicked");
    this.setState({
      persons: [
        {name: newName, age : 29},
        {name: newName2, age : 27},
        {name: 'Avinash',   age : 40}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState(
    {
      persons : [
        {name: 'Jatin', age : 29},
        {name: event.target.value, age : 27},
        {name: 'Avi',   age : 2}
      ]
    });
  }

  styleB ={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor : 'pointer'
  };

  render() {

    

    return (
      <div className="App">
        <h1> Hii I am React </h1>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this,"Jashan","Aashi")}
                changed={this.nameChangedHandler}>  
          Good girl 
        </Person>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
        <button style={this.styleB} onClick={this.switchNameHandler.bind(this,"Jaswant","Sahil")}>Switch Names</button>
      </div>
    );
  }
}

export default App;
