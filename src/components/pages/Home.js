import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <div className="center-block">
      <h2>QR</h2>

      <h4 className="big-mrg-bottom">Reader</h4>

      <FlatButton
        backgroundColor="#7D7D7D"
        hoverColor="#7D7D7D"
      >
        <Link to="/scanner">
          <div className="icon qr-icon"></div>
        </Link>
      </FlatButton>

    </div>
  </div>
);

export default Home;
