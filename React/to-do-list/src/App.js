import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: { date: '', description: '' }, todos: [] }
  }

  inputDesChanged = (event) => {
    console.log(event.target.value)
    this.setState({
      todo: {
        ...this.state.todo,
        description: event.target.value
      }
    });
  }

  inputDateChanged = (event) => {
    console.log(event.target.value)
    this.setState({
      todo: {
        ...this.state.todo,
        date: event.target.value
      }
    });
  }

  addTodo = (event) => {
    event.preventDefault();
    console.log(this.state.todo)
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: {
        date: '',
        description: ''
      }
    });
  }

  onDelete = (index) => {
    console.log(index)
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <label name="description">Description: </label>
            <input type="text" name="description" onChange={this.inputDesChanged} value={this.state.todo.description} />
            <label name="date">Date: </label>
            <input type="text" name="date" onChange={this.inputDateChanged} value={this.state.todo.date} />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div>
          <TodoTable
          todos = {this.state.todos}
          onDelete = {(index) => this.onDelete(index)}
          />
        </div>
      </div>
    );
  }
}

export default App;