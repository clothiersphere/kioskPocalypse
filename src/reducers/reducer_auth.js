import { SUBMIT_USER_INFO, CREATE_KIOSK_ENTRY, LOGIN, FETCH_KIOSK_LIST } from '../actions/index';


const INITIAL_STATE = {
  loggingIn: false,
  kioskCount: 0,
  kioskList: [],
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
        kioskList: action.payload,
      };
    case FETCH_KIOSK_LIST:
      return {
        ...state,
        kioskList: action.payload,
      };
    default:
      return state;
  }
}
