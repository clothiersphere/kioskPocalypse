const axios = require('axios');
const pgp = require('pg-promise')();
const PS = require('pg-promise').PreparedStatement;

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/kiosks';
const db = pgp(connectionString);

// const checkUser = (req, res) => {
//   console.log('req body', req.body);
//   const userEmail = req.body.email;
//   console.log('email', userEmail);
//   const findUser = new PS('find-user', 'SELECT * FROM Users WHERE email = $1', [userEmail]);

//   return db.none(findUser)
//     .then(() => {
//       const addUser = new PS('add-user', 'INSERT INTO Users(first_name, last_name, password, email, zip) VALUES($1, $2, $3, $4, $5)');
//       addUser.values = [req.body.first_name, req.body.last_name, req.body.password, req.body.email, req.body.zip];

//       return db.none(addUser)
//         .then(() => {
//           res.status(201).send('User added');
//         })
//         .catch(error => {
//           console.log('failed to insert', error);
//         });
//     })
//     .catch((error) => {
//       console.log('found one', error);
//       res.status(409).send('E-mail is already in use');
//     });
// };

// exports.checkUser = checkUser;
