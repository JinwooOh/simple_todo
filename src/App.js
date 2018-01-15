import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList : [],
      currentInput: ""
    };
  }
  inputTodo = (e) =>{
    this.setState({
      currentInput: e.target.value
    })
  }
  addTodo = () => {
    let todoListCopy = this.state.todoList.slice();
    todoListCopy.push(this.state.currentInput);
    this.setState({
      todoList: todoListCopy,
      currentInput: ""
    });
    console.log(this.state.todoList);

  }
  render(){
    let bulletList = this.state.todoList.map((e, i)=>{
      return (
        <li key={i}>{e}</li>
      );
    });
    return(
      <div>
        <input onChange={this.inputTodo}></input>
        <button onClick={this.addTodo}>Add This</button>
        <ul>{bulletList}</ul>
      </div>
    );
  }


}

export default App;
