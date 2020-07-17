import React, {Component} from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, title: "Sleep", content: "Have some sleep"},
      {id: 2, title: "Work", content: "Go to work and make some money"},
      {id: 3, title: "Eat", content: "Remember to eat something"},
    ]
  }
  
  removeItem = (id) => {
    const todoList = this.state.todos.filter(item => {
      return item.id !== id
    });
    this.setState({
      todos: todoList
    })
    console.log(todoList)
  }
  
  addItem = (todo) => {
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    if(this.state.todos.length) {
      return(
        <div className="App">
          <h1 className="blue-text center">Todo List</h1>
          <div className="center container">
            <Todo todos={this.state.todos} removeItem={this.removeItem} />
            <AddTodo addItem={this.addItem}/>
          </div>
        </div>
      )
    } else {
      return(
        <div className="App">
          <h1 className="blue-text center">Todo List</h1>
          <p className="center">You have no tasks!</p>
          <AddTodo addItem={this.addItem}/>
        </div>
      )
    }
  }
}

export default App;