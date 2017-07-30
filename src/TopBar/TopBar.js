import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AddTaskButton from 'material-ui/svg-icons/content/add';
import CloseAddFormButton from 'material-ui/svg-icons/content/clear';
import Snackbar from 'material-ui/Snackbar'
import Drawer from 'material-ui/Drawer';
import Add from '../Add/Add'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openSnack: false,
            open: false,
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    // openAddTaskSnack() {
    //     this.setState({ openSnack: true })
    // }

    handleCloseSnack = () => {
        this.state.openSnack = false;
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Vos tâches"
                    iconElementRight={<IconButton><AddTaskButton onClick={this.handleToggle} /></IconButton>} />
                <Drawer openSecondary={true} open={this.state.open} width="85%" docked={false}>
                    <IconButton className="close-add-form-button"><CloseAddFormButton onClick={this.handleToggle} /></IconButton>
                    <Add closeAddPane={this.handleToggle} />
                </Drawer>
                <Snackbar
                    open={this.state.openSnack}
                    message="Task added"
                    autoHideDuration={4000}
                    onRequestClose={this.handleCloseSnack}
                />
            </div>
        );
    }
}

export default TopBar;
