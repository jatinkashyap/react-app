import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person} >
            <p > I am {props.name} and I am {props.age} years old </p>
            <input onChange={props.changed} value={props.name}/>
            <button  onClick={props.click}>Delete</button> 
        </div>
    );
};

export default person;