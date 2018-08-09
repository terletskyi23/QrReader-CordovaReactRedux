import React, { Component } from 'react';

function displayContents(err, text){
  if(err){
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
      <div>
        <h1>Home none transparent</h1>
      </div>
    );
  }
};

export default Home;
