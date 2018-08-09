import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

function displayContents(err, text){
  if(err) {
    alert(JSON.stringify(err));
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
  }
}

class Home extends Component {
  componentDidMount() {
    QRScanner.scan(displayContents);

    // Make the webview transparent so the video preview is visible behind it.
    QRScanner.show();
  }
  render() {
    return (
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
  }
}

export default Home;
