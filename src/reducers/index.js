import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import AuthReducer from './reducer_auth.js';

const reducers = combineReducers({
  user: modelReducer('user', { kiosk_id: '', mall: '', city: '', state: '', zip: '', batteries_on_loan: '', batteries_to_replace: '', battery_count: '' }),
  userForm: formReducer('user'),
  history: AuthReducer,
});

export default reducers;
