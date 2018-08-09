import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => {
  return (
    <AppBar title={<div id="small-logo"></div>}
            className="app-bar header"
            style={{ backgroundColor: "#000" }}
            showMenuIconButton={false} />
  );
};

export default Header;

