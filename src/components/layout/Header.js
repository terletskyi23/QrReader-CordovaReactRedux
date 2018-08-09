import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => (
  <AppBar
    title={<div id="small-logo" />}
    className="app-bar header"
    style={{ backgroundColor: '#000' }}
    showMenuIconButton={false}
  />
);

export default Header;
