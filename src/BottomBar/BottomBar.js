import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import UrgentIcon from 'material-ui/svg-icons/alert/warning'
import DoneIcon from 'material-ui/svg-icons/navigation/check'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import Paper from 'material-ui/Paper';
import './BottomBar.css'

const urgentIcon = <UrgentIcon />;
const doneIcon = <DoneIcon />;
const settingsIcon = <SettingsIcon />;


class BottomBar extends Component {
    state = {
        open: false,
    };
    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div id="bottom-bar">
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Urgentes"
                            icon={urgentIcon}
                            onTouchTap={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="Complètes"
                            icon={doneIcon}
                            onTouchTap={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="Paramètres"
                            icon={settingsIcon}
                            onTouchTap={() => this.select(2)}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}

export default BottomBar;
