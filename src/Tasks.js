import React from 'react';
import Fragment from 'react';

const Tasks = ({tasks}) => {
    
    const taskList = tasks.length ? (
        tasks.map(task => {
            return (
                <div className="collection-item" key={task.id}>
                    <span>{task.title}</span>
                </div>
            )
        })
    ) : (
        <p> You have no tasks.</p>
    );

    return(
        <div className="tasks collection">
            {taskList}
        </div>
    )
}

export default Tasks;