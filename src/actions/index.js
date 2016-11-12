import axios from 'axios';

// export const SUBMIT_USER_INFO = 'SUBMIT_USER_INFO';
export const CREATE_KIOSK_ENTRY = 'CREATE_KIOSK_ENTRY';

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

export function createKiosk(data) {
  console.log(data: "got into actions createKiosk")

  const request = axios({ 
    method: 'POST',
    url: 'http://localhost:8080/kiosks/create',
    data,
  });

  return request
    .then( response => {
      payload(CREATE_KIOSK_ENTRY, response);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        // update view with error message - email in use
      }
    });  
}
