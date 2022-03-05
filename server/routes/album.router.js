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

router.post('/', rejectUnauthenticated, async (req, res) => {
    const client = await pool.connect();
    const userId = req.user.id;
    const { title, 
            length
             } 
            
            = req.body;

    try {
        await client.query('BEGIN');
        const firstQuery = `
                            INSERT INTO "albums" (
                            "user_id", 
                            "title", 
                            "length",
                            
                            )
                            VALUES($1, $2, $3)
                            RETURNING "id"`;

        const result = await client.query
        
        (
            
            firstQuery, 
                [userId, 
                    title, 
                    length
                ]
        );

        const newAlbumId = result.rows[0].id;
        
        await client.query(secondQuery, [newAlbumId, title, length]);

        await client.query('COMMIT'); 

        res.sendStatus(201);

    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error posting album', error)
        res.sendStatus(500)
    } finally {
        //ends pool.connect
        client.release();
    }
})


router.put('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    const songInfo = req.body
  
    // get key : value pairs out of songInfo
    const songValuePairs = Object.entries(songInfo);
  
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