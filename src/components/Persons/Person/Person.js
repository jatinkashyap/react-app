import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{

    constructor(props){
        super(props);
        console.log("Inside Person.js constructor",props);
    
      }
    
      componentWillMount(){
        console.log("Inside Person.js componentWillMount");
      }
      
      componentWillUnmount(){
        console.log("Person is unmount");
      }

      componentDidMount(){
        console.log("Inside Person.js componentDidMount");
      }

    render(){

        console.log("Inside Person.js render");

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