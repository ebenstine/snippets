const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//route to get all albums
router.get('/', rejectUnauthenticated, (req, res) => {
    
    const queryText = `SELECT * FROM albums ORDER BY "id" ASC`;
    
    pool.query(queryText, [req.user.id])
    .then((result) => {
        console.log(result.rows);
        res.send((result.rows))
    })
    .catch((error) => {
        console.log('Error getting albums', error);
        res.sendStatus(500);
    })
})
//route to get one album
router.get('/:id', rejectUnauthenticated, (req, res) => {
    if (req.params.id === 'undefined') {
        return null
    } else {
        const id = req.params.id;
        const queryText = `
                        SELECT * FROM albums
                        WHERE id = $1
                        `
        pool.query(queryText, [id])
        .then(result => {
            console.log(result.rows);
            res.send(result.rows)
        })
        .catch(error => {
            console.log('error getting selected song', error);
        })
    }
})

//post route new Song from AddSong component

router.post('/', rejectUnauthenticated, (req, res) => {
    const album= req.body;
    const userId= req.user.id
  
    let queryText = `INSERT INTO "albums" (
                          user_id, title, length
                       )
                       
                       VALUES ($1, $2, $3);
                       
                       `;
    pool.query(queryText, [userId, album.title, album.length])
   
  
      .then(result => {
        res.sendStatus(201);
        console.log(result);
  
      }).catch(error => {
        // catch for second query
        console.log(error);
        res.sendStatus(500)
      })
    })


router.put('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    const albumInfo = req.body
  
    // get key : value pairs out of songInfo
    const songValuePairs = Object.entries(albumInfo);
  
    // loop over array to get keys and values for all items in songInfo 
    for (let [key, value] of songValuePairs) {
      let sqlText = `UPDATE albums 
                     SET ${key} = $2 
                     WHERE id = $1;`
  
      pool.query(sqlText, [id, value])
        .then(result => {
          console.log(result);
          res.sendStatus(201);
        }).catch(error => {
          console.log('error in put', error);
          res.sendStatus(500);
        });
  
    }
  });


module.exports = router;


