import React, { Component } from 'react';

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
                    <label>Title:</label>
                    <input value={this.state.title} type="text" onChange={(event) => this.setState({title: event.target.value})} />
                    <label>Description:</label>
                    <input value={this.state.description} type="text" onChange={(event) => this.setState({description: event.target.value})} />
                    <label>Due Date:</label>
                    <input value={this.state.dueDate} type="text" onChange={(event) => this.setState({dueDate: event.target.value})} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddTask;