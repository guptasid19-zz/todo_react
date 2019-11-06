import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import TaskHandler from './services/taskHandler';
import Login from './Login';
import {
  Route,
  Redirect,
} from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    myAuth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
      }} />
  )} />
)

const myAuth = {
  // isAuthenticated() {
  //   return sessionStorage.getItem('auth-token') ? true : false
  // },
  isAuthenticated: false,
  authenticate(token) {
    if (token) {
      sessionStorage.setItem( 'auth-token', token )
      this.isAuthenticated = true
    }
  },
  signout(cb) {
    sessionStorage.clear()
    this.isAuthenticated = false
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
    }
  }

  async componentDidMount() {
    console.log('component mounted...')
    if(myAuth.isAuthenticated){
        try {
            const tasks = await TaskHandler.fetchTasks(); 
            this.setState({
            tasks
            })
        } catch(error) {
            console.log('Error fetching tasks');
        }
    }
  }

  addTask = async (task) => {
    try {
      const response = await TaskHandler.createTask(task);
      const newTask = response.data;
      let tasks = [...this.state.tasks, newTask]
      this.setState({
        tasks: tasks
      })
    } catch(e) {
      console.log(e.response);
      alert(e.response);
    }
  }

  loginUser = (token) => {
    myAuth.authenticate(token)
    this.props.history.push(`/tasks`)
    this.fetchTasks()
  }
  
  async fetchTasks() {
    try {
      const tasks = await TaskHandler.fetchTasks(); 
      console.log('fetched tasks===', tasks)
      this.setState({ tasks: tasks.data })
    } catch(error) {
      console.log('Error fetching tasks');
    }
  }

  logoutUser = () => {
    myAuth.signout()
    this.props.history.push(`/`)
  }

  isLoggedIn = () => {
    console.log('checking if logged in?')
    if (myAuth.isAuthenticated) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('state', this.state)

    return (
      <div className="todo-app container">
        <Route exact path='/' component={() => <Login loginUser={ this.loginUser } /> } />
        <AuthRoute exact path='/tasks' component={() => <Tasks tasks={this.state.tasks} logout={this.logoutUser} /> }/>
        <AuthRoute exact path='/add' component={() => <AddTask addTask={this.addTask} logout={this.logoutUser} />}/>
      </div>
    )
  }
}


export default App;
