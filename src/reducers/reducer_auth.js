import { SUBMIT_USER_INFO, LOGIN } from '../actions/index';


const INITIAL_STATE = {
  loggingIn: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true,
      };
    case SUBMIT_USER_INFO:
      return {
        ...state,
        isLoggedin: action.payload,
      };
    default:
      return state;
  }
}
