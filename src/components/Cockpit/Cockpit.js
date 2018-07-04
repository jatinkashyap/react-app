import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass=[classes.Button];

    if(props.persons.length <= 2){
      assignedClasses.push(classes.Red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    if(props.showPersons){
        btnClass.push(classes.Red);
    }

    return(
        <Aux>
            <h1> {props.appTitle} </h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={props.login}>
                Login
            </button>
        </Aux>
    );
}

export default cockpit;