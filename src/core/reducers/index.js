import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import qrDataReducer from './qrData';

const rootReducer = combineReducers({
  qrData: qrDataReducer,
  routing: routerReducer,
});

export default rootReducer
