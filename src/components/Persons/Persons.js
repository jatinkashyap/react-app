import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{

  constructor(props){
    super(props);
    console.log("Inside Persons.js constructor",props);
    this.lastPersonRef =  React.createRef();
  }

  componentWillMount(){
    console.log("Inside Persons.js componentWillMount");
  }
  
  componentDidMount(){
    console.log("Inside Persons.js componentDidMount");
  }

  componentWillReceiveProps(nextProps){
    console.log("[UPDATE Persons.js] comoentWillReceiveProps" , nextProps);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("[UPDATE Persons.js] shouldComponentUpdate" , nextProps,nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps,nextState){
    console.log("[UPDATE Persons.js] componentWillUpdate" , nextProps,nextState);
  }

  componentDidUpdate(){
    console.log("[UPDATE Persons.js] componentDidUpdate");
    this.lastPersonRef.current.focus();
  }

  render(){
    console.log("Inside Persons.js render");
    return this.props.persons.map(
      (person,index) => {
        return <Person 
          key={person.id}
          name={person.name}
          position={index}
          ref={this.lastPersonRef}
          age={person.age}
          auth={this.props.isAuth}
          click={() => this.props.clicked(person.id)} 
          changed={(event) => this.props.changed(event,person.id)} />;
      }
    );
  }
}


export default Persons;