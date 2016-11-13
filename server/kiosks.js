const axios = require('axios');
const pgp = require('pg-promise')();
const PS = require('pg-promise').PreparedStatement;

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/kiosks';
const db = pgp(connectionString);

const findKiosk = new PS('find-user', 'SELECT * FROM Kiosks WHERE kioskId = $1');
const addKiosk = new PS('add-user', 'INSERT INTO Kiosks(kioskId, mall, city, state, zip, batteriesOnLoan, batteriesToReplace, batteryCount) VALUES($1, $2, $3, $4, $5, $6, $7, $8)');

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
  const kioskId = req.body.kioskId
  console.log('kiosk', req.body)

  return db.none(findKiosk, kioskId)
    .then(() => {
      return db.none(addKiosk, [req.body.kioskId, req.body.mall, req.body.city, req.body.state, req.body.zip, req.body.batteriesOnLoan, req.body.batteriesToReplace, req.body.batteryCount])
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
