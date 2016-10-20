import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import AuthReducer from './reducer_auth.js';

const reducers = combineReducers({
  user: modelReducer('user', { first_name: '', last_name: '', password: '', zip: '' }),
  userForm: formReducer('user'),
  history: AuthReducer,
});

export default reducers;
