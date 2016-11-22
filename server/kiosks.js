const axios = require('axios');
const pgp = require('pg-promise')();
const PS = require('pg-promise').PreparedStatement;

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/kiosks';
const db = pgp(connectionString);

const findKiosk = new PS('find-user', 'SELECT * FROM Kiosks WHERE kiosk_id = $1');
const addKiosk = new PS('add-user', 'INSERT INTO Kiosks(kiosk_id, mall, city, state, zip, batteries_on_loan, batteries_to_replace, battery_count) VALUES($1, $2, $3, $4, $5, $6, $7, $8)');

const findAllKiosk = new PS('find-all', 'SELECT * FROM Kiosks');
// .then(successFn).catch(failureFn) === .then(successFn).then(undefined, failureFn)

let findAll = (req, res) => {

  return db.any(findAllKiosk)
    .then((result) => {
      console.log(result)
      return res.status(201).send(result);
    })
    .catch((e) => {
      console.log(e)
    })

};

let findById = (req, res, next) => {
  let id = req.params.id;

  // .catch(next);
};

let updateKiosk = (req, res, next) => {
  let id = req.params.id;

  // .catch(next);
};

let createEntry = (req, res) => {
  const kioskId = req.body.kiosk_id
  console.log('kiosk', req.body)

  return db.none(findKiosk, kioskId)
    .then(() => {
      return db.none(addKiosk, [req.body.kiosk_id, req.body.mall, req.body.city, req.body.state, req.body.zip, req.body.batteries_on_loan, req.body.batteries_to_replace, req.body.battery_count])
    })
    .catch((e) => {
      console.log(e)
    })
      .then(() => {
        res.status(201).send('Kiosk Created')
      })


}

exports.findAll = findAll;
exports.findById = findById;
exports.updateKiosk = updateKiosk;
exports.createEntry = createEntry;
