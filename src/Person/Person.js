import React from 'react';
import './Person.css'

const style={
    cursor:'pointer'
}

const person = (props) => {
return (
    <div className='Person'>
        <p > I am {props.name} and I am {props.age} years old </p>
        <input onChange={props.changed} value={props.name}/>
        <button style={style} onClick={props.click}>Delete</button>
    </div>
    );
};

export default person;