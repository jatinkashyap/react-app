import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{
    render(){
        return (
            <div className={classes.Person} >
                <p > I am {this.props.name} and I am {this.props.age} years old </p>
                <input onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>Delete</button> 
            </div>
        );
    }
}

export default Person;