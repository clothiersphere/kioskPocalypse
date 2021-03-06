import axios from 'axios';

// export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
export const CREATE_KIOSK_ENTRY = 'CREATE_KIOSK_ENTRY';
export const FETCH_KIOSK_LIST = 'FETCH_KIOSK_LIST';

function payload(type, request) {
  return {
    type,
    payload: request,
  };
}

// export function submitUserInfo(data) {
//   const request = axios({
//     method: 'POST',
//     url: 'http://localhost:8080/api/users',
//     data: data,
//   });

//   return request
//     .then(response => {
//       payload(SUBMIT_USER_INFO, response);
//     })
//     .catch(error => {
//       if (error.response) {
//         console.log(error.response.status);
//         console.log(error.response.data);
//         // update view with error message - email in use
//       }
//     });  
// }
export function fetchKioskList() {
  const request = axios({ 
    method: 'GET',
    url: 'http://localhost:8080/kiosks/all',
  })

  return request 
    .then((response) => {
      return payload(FETCH_KIOSK_LIST, response.data);
    })
}

export function createKiosk(data) {
  console.log("got into actions createKiosk", data)

  const request = axios({ 
    method: 'POST',
    url: 'http://localhost:8080/kiosks/create',
    data,
  });

  return request
    .then( response => {
      console.log("response", response)
      payload(CREATE_KIOSK_ENTRY, response.data);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        // update view with error message - email in use
      }
    });  
}
