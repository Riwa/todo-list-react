import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)

        const tasks = [
            {
                id: 1,
                task: 'Blablabla',
                completed: true
            },
            {
                id: 2,
                task: 'Blobloblo',
                completed: false,
            }
        ]

        this.state = { tasks }
    }

    test(id) {
        alert('Here will stand the function to delete task #' + id)
    }
    
    render() {
    return (<ul>
    {this.state.tasks.map((task, index) => (
        <li key={index}>{task.task} <button onClick={() => this.test(task.id)}>[X]</button></li>
    ))}
    </ul>);
}
}

export default List;