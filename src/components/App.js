import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Routes from '../routes';


const styles = {
  backgroundStyle: {
    boxShadow: '0px 2px 12px rgba(0,0,0,.2)',
    padding: '16px 16px 10px',
    height: '100%'
  }
};

export class App extends Component {
  constructor(props) {
    super(props);

    if (window.cordova) {
        screen.orientation.lock('portrait');
    }
  }

  openDrawer=() => {
    this.props.actions.ui.openDrawer()
  };

  closeDrawer=() => {
    this.props.actions.ui.closeDrawer()
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{height: '100vh'}}>
          <Header/>
          {/*<AppBar title={<div id="logo"></div>}*/}
                  {/*className="app-bar"*/}
                  {/*style={{position: 'fixed', top: '0', backgroundColor: "#000"}}*/}
                  {/*showMenuIconButton={false} />*/}
          <Routes/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
