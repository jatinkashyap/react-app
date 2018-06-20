import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass='';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(
            (person,index) => {
              return 
              <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(person.id)}
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
            }
          )}
        </div>
      );
      btnClass=classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.Red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1> Hii I am React </h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}
        
      </div>
    );
  }
}

export default App;
