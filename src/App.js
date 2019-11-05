import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {id: 1, title: 'hello'},
        {id: 2, title: 'hello2'}
      ]
    }
  }

  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Tasks
        </h1>
        <Tasks tasks={this.state.tasks}/>
        <AddTask addTask = {this.addTask}/>
      </div>
    );
  }
}

export default App;
