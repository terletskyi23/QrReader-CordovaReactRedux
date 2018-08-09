import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from '../routes';
import Header from './layout/Header';

class App extends Component {
  constructor(props) {
    super(props);

    if (window.cordova) {
      screen.orientation.lock('portrait');
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{ height: '100vh' }}>
          <Header />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default withRouter(App);
