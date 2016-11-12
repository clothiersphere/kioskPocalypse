import { SUBMIT_USER_INFO, CREATE_KIOSK_ENTRY, LOGIN } from '../actions/index';


const INITIAL_STATE = {
  loggingIn: false,
  kioskCount: [],
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
    case CREATE_KIOSK_ENTRY:
      return {
        ...state,
        kioskCount: action.payload,
      };
    default:
      return state;
  }
}
