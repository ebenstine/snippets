const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated } = require('../modules/authentication-middleware');
//haven't defined req.body? 
router.get('/', rejectUnauthenticated, (req, res) => {
  
  const queryText = `SELECT * FROM recordings ORDER BY "id" ASC`;
  pool.query(queryText)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all recordings', err);
      res.sendStatus(500)
    })

})




router.get('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    console.log(req.params.id);
    let queryText = `
                      SELECT * FROM recordings
                      WHERE song_id = $1
                      `
   //this is getting the ID of the song - source of the delete issue
    pool.query(queryText, [id])
    .then (result => {
      console.log(result.rows);
      res.send(result.rows)
    })
    .catch(err => { 
      console.log('Error complete select song', err);
    })
  })
  
  
  
  router.post('/', rejectUnauthenticated, (req, res) => {
    const recording= req.body;
  
    let queryText = `INSERT INTO "recordings" (
                          song_id, description, src 
                       )
                       
                       VALUES ($1, $2, $3);
                       
                       `;
    pool.query(queryText, [recording.id, recording.description, recording.src])
   
  
      .then(result => {
        res.sendStatus(201);
        console.log(result);
  
      }).catch(error => {
        // catch for second query
        console.log(error);
        res.sendStatus(500)
      })
    })
  
  router.delete('/:id', rejectUnauthenticated, (req, res) => {
   
    const id = req.params.id
    console.log('in delete recording');
    let sqlText = `DELETE FROM recordings 
                   WHERE id = $1;`
                  ;
    pool.query(sqlText, [id])
        .then(result => {
            console.log(result);
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in delete', error);
            res.sendStatus(500);
        });
  });
  
  
  module.exports = router;