import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons: [
      { id: 'qwer1', name: 'Jatin', age: 29 },
      { id: 'qwer2', name: 'Ginni', age: 27 },
      { id: 'qwer3', name: 'Avi', age: 2 }
    ],
    showPersons : false
  }

  deletePersonHandler = (id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return id === p.id;
    });
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex,1);
    this.setState({persons : newPersons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return id === p.userId;
    });
   
    const newPerson = {
      ...this.state.persons[personIndex]
    };

    newPerson.name = event.target.value;

    const newPersons = [...this.state.persons];

    newPersons[personIndex] =newPerson;

    this.setState({persons : newPersons});
  }

  render() {

    let persons=null;
    

    if(this.state.showPersons){
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
