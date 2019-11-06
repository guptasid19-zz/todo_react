import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AddTask extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            dueDate: '',
            description: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            title: '',
            dueDate: '',
            description: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new task:</label>
                    <br/>
                    <label>Title:</label>
                    <input value={this.state.title} type="text" onChange={(event) => this.setState({title: event.target.value})} />
                    <label>Description:</label>
                    <input value={this.state.description} type="text" onChange={(event) => this.setState({description: event.target.value})} />
                    <label>Due Date:</label>
                    <input value={this.state.dueDate} type="text" onChange={(event) => this.setState({dueDate: event.target.value})} />
                    <input type="submit" value="Submit" />
                    <button onClick={this.props.logout}>Logout</button>
                    <Link to='/tasks'>Tasks</Link>
                </form>
            </div>
        )
    }
}

export default AddTask;