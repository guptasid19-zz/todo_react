import React from 'react';
import {Link} from 'react-router-dom'
// import Fragment from 'react';

class Tasks extends React.Component {
    
    render() {
        const { tasks, logout } = this.props

        const taskList = tasks.length ? (
            <div>
                {
                    tasks.map((task, i) => (
                            <div>
                                <div className="collection-item" key={`task-${i}`}>
                                    <span>{task.title}</span>
                                </div>
                            </div>
                        )
                    )
                }
                <button onClick={logout}>Logout</button>
                <Link to='/add'>Add Task</Link>

            </div>
        ) : (
            <div>
                <p> You have no tasks.</p>
                <button onClick={logout}>Logout</button>
                <Link to='/add'>Add Task</Link>
            </div>
        );
    
        return(
            <div className="tasks collection">
                {taskList}
            </div>
        )
    }
    
}

export default Tasks;