import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <div className="center-block">
      <h2>QR</h2>
      <h4 className="big-mrg-bottom">Scanner</h4>

      <FlatButton
        backgroundColor="#000"
        hoverColor="#000"
      >
        <Link to="/scanner">
          <div className="icon qr-icon" />
        </Link>
      </FlatButton>
    </div>
  </div>
);

export default Home;
