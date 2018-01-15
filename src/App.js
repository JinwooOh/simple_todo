import React, { Component } from 'react';
import './App.css';
import SingleTodo from './singleTodo';

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
  deleteTodo = (i)=>{
    let todoListCopy = this.state.todoList.slice();
    todoListCopy.splice(i,1);
    this.setState({
      todoList: todoListCopy
    })
  }

  render(){
    let bulletList = this.state.todoList.map((e, i)=>{
      return (
        <SingleTodo todo = {e} delete= {()=>this.deleteTodo(i)}/>
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
