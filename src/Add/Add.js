import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios'
import './Add.css'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            open: false,
            newTask: {
                task: '',
                details: '',
                priority: 2,
                created: new Date(),
                completed: false
            }
        };

        this.handleChangeTask = this.handleChangeTask.bind(this);
        this.handleChangeDetails = this.handleChangeDetails.bind(this);
        this.handleChangePrior = this.handleChangePrior.bind(this);
    }


    // handleChange = (event, index, value) => this.setState({ value });

    handleChangeTask(event) {
        let createNewTask = Object.assign({}, this.state.newTask);
        createNewTask.task = event.target.value;
        this.setState({ newTask: createNewTask });
    }

    handleChangeDetails(event) {
        let createNewTask = Object.assign({}, this.state.newTask);
        createNewTask.details = event.target.value;
        this.setState({ newTask: createNewTask });
    }

    handleChangePrior(event, index, value) {
        let createNewTask = Object.assign({}, this.state.newTask);
        createNewTask.priority = value;
        this.setState({ newTask: createNewTask });
    }

    addTask() {
        axios.post('http://localhost:9000/addTask', this.state.newTask).then((response) => {
            this.props.closeAddPane();
        })
    }

    render() {

        return (
            <div className="add-form">
                <h3> Add a task </h3>
                <form>
                    <div>
                        <TextField
                            value={this.state.newTask.task}
                            fullWidth={true}
                            floatingLabelText="Tâche"
                            onChange={this.handleChangeTask}
                        />
                    </div>
                    <div>
                        <TextField
                            value={this.state.newTask.details}
                            fullWidth={true}
                            floatingLabelText="Détails"
                            multiLine={true}
                            rows={2}
                            onChange={this.handleChangeDetails}
                        />
                    </div>
                    <div>
                        <SelectField
                            fullWidth={true}
                            floatingLabelText="Priority"
                            value={this.state.newTask.priority}
                            onChange={this.handleChangePrior}
                        >
                            <MenuItem value={1} primaryText="Low" />
                            <MenuItem value={2} primaryText="Normal" />
                            <MenuItem value={3} primaryText="High" />
                        </SelectField>

                        <FlatButton
                            backgroundColor="#a4c639"
                            onClick={() => this.addTask()}>Add</FlatButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add