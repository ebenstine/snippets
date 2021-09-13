const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
//route to get all songs
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = 
    `SELECT song_id, title, date, instrument_notes, performance_notes, priority, lyrics, preview_audio,
        ARRAY_AGG (src)
        FROM songs
        JOIN "recordings" ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        GROUP BY song_id, title, date, instrument_notes, performance_notes, priority, lyrics, preview_audio 
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
    const { title, instrument_notes, performance_notes, priority, lyrics, src, description } = req.body;

    try {
        await client.query('BEGIN');
        const firstQuery = `
                            INSERT INTO "songs" (
                            user_id, title, instrument_notes, performance_notes, priority, lyrics, preview_audio
                            )
                            VALUES($1, $2, $3, $4, $5, $6, $7)
                            RETURNING "id"`;

        const result = await client.query(firstQuery, [userId, title, instrument_notes, performance_notes, priority, lyrics, src]);

        const newSongId = result.rows[0].id;
        const secondQuery = `
                            INSERT INTO "recordings" (song_id, src, description)
                            VALUES ($1, $2, $3)
        
                            `;
        await client.query(secondQuery, [newSongId, src, description]);

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

//put route to edit a song
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    const songDetails = req.body
    const songValuePairs = Object.entries(songDetails);

    for (let [key, value] of songValuePairs) {
        let queryText = `UPDATE songs
                         SET ${key} = $2
                         WHERE id = $1`

        pool.query(queryText, [id, value])
        .then(result => {
            console.log(result);
            res.sendStatus(201);
        }).catch(error => {
            console.log('error updating song', error);
            res.sendStatus(500);
        })
    }
})

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
