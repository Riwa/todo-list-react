import React, { Component } from 'react';
import axios from 'axios';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import mobx from 'mobx'
import mobxReact from 'mobx-react'

@observer
class TasksList extends Component {
    constructor(props) {
        super(props)

        const tasks = []

        this.state = { tasks }
    }

    deleteTask(id) {
        alert('Here will stand the function to delete task #' + id)
    }

    loadTasks() {
    }

    componentWillMount() {
        axios.get('http://localhost:9000').then((response) => {
            this.tasks = response.data
            console.log(this.tasks)
            this.setState({ tasks: this.tasks })
        })
    }

    render() {
        console.log('Render starting...')
        return (<div>
            <List>
                {this.state.tasks.map((task, index) => (
                    <ListItem key={task.id} primaryText={task.task} rightIcon={<ActionInfo />} />
                    // <li key={index}>{task.task} <button onClick={() => this.deleteTask(task.id)}>[X]</button></li>
                ))}
            </List>
        </div>);
    }
}

export default TasksList;