import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import background from '../../assets/img/camera.png';
import { setData, resetData } from '../../core/actions/qrData';

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
    if (err) {
      alert(JSON.stringify(err));
    } else {
      QRScanner.destroy(() => this.props.setData(text));
    }
  }

  render() {
    const alreadyHasData = !!this.props.data.length;
    return (
      <div>
        <div>
          {!alreadyHasData &&
            <img className="scanner" src={background} alt="background" />
          }
          {alreadyHasData &&
            <div className="scanner-result">
              <div className="scanner-result__text">{this.props.data}</div>
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
