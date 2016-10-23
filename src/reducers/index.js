import { combineReducers } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import AuthReducer from './reducer_auth.js';

const reducers = combineReducers({
  user: modelReducer('user', { mall: '', city: '', state: '', zip: '', batteriesInUse: '', batteriesToReplenish: '', batteriesInStock: '' }),
  userForm: formReducer('user'),
  history: AuthReducer,
});

export default reducers;
