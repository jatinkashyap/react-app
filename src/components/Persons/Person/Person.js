import React,{Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component{

    constructor(props){
        super(props);
        console.log("Inside Person.js constructor",props);
        this.inputElement =  React.createRef();
    }

    componentWillMount(){
        console.log("Inside Person.js componentWillMount");
    }
    
    componentWillUnmount(){
        console.log("Person is unmount");
    }

    componentDidMount(){
        console.log("Inside Person.js componentDidMount");
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render(){
        console.log("Inside Person.js render");
        return (
            <Aux>
                {this.props.auth ? <p> I am authenticated </p> : null}
                <p > I am {this.props.name} and I am {this.props.age} years old </p>
                <input 
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
                <button onClick={this.props.click}>Delete</button> 
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);