const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//route to get all songs
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 
    `SELECT song_id, 
            title, 
            date, 
            instrument_notes, 
            performance_notes, 
            priority, 
            lyrics, 
            finished, 
            preview_audio,
        ARRAY_AGG (src)
        FROM songs
        JOIN "recordings" 
        ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        GROUP BY song_id, 
                 title, 
                 date, 
                 instrument_notes, 
                 performance_notes, 
                 priority, 
                 lyrics, 
                 finished, 
                 preview_audio 
        ORDER BY song_id ASC
    `;

    pool.query(queryText, [req.user.id])
    .then((result) => {
        console.log(result.rows);
        res.send((result.rows))
    })
    .catch((error) => {
        console.log('Error getting songs', error);
        res.sendStatus(500);
    })
})
//route to get a select song
router.get('/:id', rejectUnauthenticated, (req, res) => {
    if (req.params.id === 'undefined') {
        return null
    } else {
        const id = req.params.id;
        const queryText = `
                        SELECT * FROM songs
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
            instrument_notes, 
            performance_notes, 
            priority, 
            lyrics, 
            finished, 
            src, 
            description } 
            
            = req.body;

    try {
        await client.query('BEGIN');
        const firstQuery = `
                            INSERT INTO "songs" (
                            user_id, 
                            title, 
                            instrument_notes, 
                            performance_notes, 
                            priority, 
                            lyrics, 
                            finished, 
                            preview_audio
                            )
                            VALUES($1, $2, $3, $4, $5, $6, $7)
                            RETURNING "id"`;

        const result = await client.query
        
        (
            
            firstQuery, 
                [userId, 
                    title, 
                    instrument_notes, 
                    performance_notes, 
                    priority, 
                    lyrics, 
                    finished, 
                    src
                ]
        );

        const newSongId = result.rows[0].id;
        const secondQuery = `
                            INSERT INTO "recordings" (song_id, description, src)
                            VALUES ($1, $2, $3)
        
                            `;
        await client.query(secondQuery, [newSongId, description, src]);

        await client.query('COMMIT'); 

        res.sendStatus(201);

    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error posting song', error)
        res.sendStatus(500)
    } finally {
        //ends pool.connect
        client.release();
    }
})

//working put route to edit a song, requires all fields update
/*router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log("****\n*****\n*****");
    const id = req.params.id;
    console.log(req.params);
    
    console.log(req.body);


    const { title, instrument_notes, performance_notes, lyrics, priority } = req.body
    
    const queryText = `

    UPDATE songs
    SET
        title = $1,
        instrument_notes = $2,
        performance_notes = $3,
        lyrics = $4,
        priority = $5
    WHERE id = $6;
    `;

    pool.query(queryText, [title, instrument_notes, performance_notes, lyrics, priority, req.params.id])
            .then(result => {
            console.log(result);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error updating song', error);
            res.sendStatus(500);
        })
});*/

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    const songInfo = req.body
  
    // get key : value pairs out of songInfo
    const songValuePairs = Object.entries(songInfo);
  
    // loop over array to get keys and values for all items in songInfo 
    for (let [key, value] of songValuePairs) {
      let sqlText = `UPDATE songs 
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
  

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;

    console.log('in delete song', id);
    let queryText = `DELETE FROM recordings
                    WHERE song_id = $1
                    ;`;
    pool.query(queryText, [id])
    .then(result => {
        console.log(result);
        
        let queryText = `DELETE FROM songs
                        WHERE id = $1
                        ;`;

    pool.query(queryText, [id])
    .then(result => {
        console.log(result);
        res.sendStatus(201);
        }).catch(error => {
        console.log('error deleting song', error);
        res.sendStatus(500);
        })
    })
})

module.exports = router;
