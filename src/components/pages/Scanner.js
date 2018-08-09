import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import { setData, resetData } from '../../core/actions/qrData';

import background from '../../assets/img/camera.png';

class Scanner extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    QRScanner.scan(this.scannerHandler);
    QRScanner.show();
  }
  componentWillUnmount() {
    this.props.resetData();
    QRScanner.destroy();
  }

  scannerHandler(err, text) {
    if(err) {
      alert(JSON.stringify(err));
    } else {
      QRScanner.destroy(() => this.props.setData(text));
    }
  }
  render() {
    let alreadyHasData = !!this.props.data.length;

    return (
      <div>
          <div>
            {!alreadyHasData &&
              <img className="scanner" src={background} />
            }
            {alreadyHasData &&
              <div className="scanner-result">
                <div className="center-block">
                  <h4 className="big-mrg-bottom">{this.props.data}</h4>

                  <FlatButton
                    backgroundColor="#000"
                    hoverColor="#000"
                  >
                    <Link to="/">
                      <div className="icon back-icon"></div>
                    </Link>
                  </FlatButton>
                </div>
              </div>
            }
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.qrData.data,
});
const mapDispatchToProps = dispatch => ({
  setData: text => dispatch(setData(text)),
  resetData: () => dispatch(resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
