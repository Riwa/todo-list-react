import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import TasksList from './TasksList/TasksList'
import TopBar from './TopBar/TopBar'
import BottomBar from './BottomBar/BottomBar'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  // constructor(props) {
  //   super(props);


  // }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <TopBar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <TasksList />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <BottomBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
