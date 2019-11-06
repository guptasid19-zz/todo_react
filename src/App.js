import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import TaskHandler from './services/taskHandler';
import Login from './Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isLoggedIn: false,
      token: ''
    }
  }

  async componentDidMount() {
    try {
      const tasks = await TaskHandler.fetchTasks(); 
      this.setState({
        tasks
      })
    } catch(error) {
      console.log('Error fetching tasks');
    }
  }

  addTask = (task) => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks: tasks
    })
  }

  loginUser = (token) => {
    console.log(token);
    this.setState({
      isLoggedIn: true,
      token
    })
  }

  render() {
    if(this.state.isLoggedIn){
      return (
      <div className="todo-app container">
        <Tasks tasks={this.state.tasks}/>
        <AddTask addTask = {this.addTask}/>
      </div>
      )
    } else {
      return (
        <div className="todo-app container">
          <Login loginUser={this.loginUser}/>
        </div>
      )
    }
  }
}

export default App;
