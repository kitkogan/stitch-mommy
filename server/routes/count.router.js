const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT type, start_count FROM new_stitch';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT count query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const newCount = req.body;
    const queryText = `INSERT INTO new_stitch ("type", "start_count")
                      VALUES ($1, $2)`;
    const queryValues = [
      newCount.type,
      newCount.startCount,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing SELECT count query', err);
        res.sendStatus(500);
      });
  });
  

module.exports = router;