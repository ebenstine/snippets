const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated } = require('../modules/authentication-middleware');
//haven't defined req.body? 

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
   
    let queryText = `
                      SELECT * FROM chord_diagrams
                      WHERE song_id = $1
                      `
   //this is getting the ID of the song - source of the delete issue
    pool.query(queryText, [id])
    .then (result => {
      console.log(result.rows);
      res.send(result.rows)
    })
    .catch(err => { 
      console.log('Error getting chord diagrams', err);
      //this is the error showing in the console on delete
      //req.params.id is undefined
    })
  })
  
  
  
  router.post('/', rejectUnauthenticated, (req, res) => {
    const chord_diagram= req.body;
  
    let queryText = `INSERT INTO "chord_diagrams" (
                          song_id, image_path 
                       )
                       
                       VALUES ($1, $2);
                       
                       `;
    pool.query(queryText, [chord_diagram.song_id, chord_diagram.image_path])
   
  
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
    console.log('in delete chord diagram');
    let sqlText = `DELETE FROM chord_diagrams
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