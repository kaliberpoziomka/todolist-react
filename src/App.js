import React, {Component} from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, title: "Go sleep", content: "Have a good rest boi"},
      {id: 2, title: "Work", content: "Go to work and make some money"},
    ]
  }
  
  render() {
    const removeItem = (id) => {
      const todoList = this.state.todos.filter(item => {
        return item.id !== id
      });
      this.setState({
        todos: todoList
      })
      console.log(todoList)
    }

    const addItem = (todo) => {
      console.log(todo);
    }
    
    if(this.state.todos.length) {
      return(
        <div className="App">
          <h1 className="blue-text center">Todo List</h1>
          <div className="center container">
            <Todo todos={this.state.todos} removeItem={removeItem} />
            <AddTodo addItem={addItem} />
          </div>
        </div>
      )
    } else {
      return(
        <div className="App">
          <h1 className="blue-text center">Todo List</h1>
          <p className="center">You have no tasks!</p>
        </div>
      )
    }
  }
}

export default App;