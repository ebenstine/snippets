import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Card, CardContent, CardActions } from '@material-ui/core';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
function SongsList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector(store => store.songs);
    const recordings = useSelector((store) => store.recordings);

    //get db info on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_SONGS' });
    }, []);
    //push forward to details page on click
    const handleClick = (song) => {
        console.log('you clicked on:', song);
        dispatch ({
            type: 'GET_DETAILS',
            payload: song,
        });

        history.push('/details')
    }
//push forward to the form
    const handleNext = () => {
        console.log('clicked add song');
        history.push('/addSong')
    }
//basic material ui setup in return, plan to revisit this
    return (
        <>
            
            <Grid container justifyContent="center" spacing={4}>
            <Button onClick={handleNext}>Add a New Song!</Button>
            <section className="songs">
            {songs.map((song) => {
                    return (
                        <Grid item md={3} key={song.id} >
                            <div>
                            <Typography variant="overline">"{song.title}"</Typography>
                            </div>
                            <div>
                            <Typography variant="caption"> Tuning: {song.tuning}</Typography>
                            </div>
                            <div>
                            <Typography variant="caption">Performance Notes: {song.performance_notes}</Typography>
                            </div>
                            <div>
                            <Typography variant="caption">Lyrics: {song.lyrics}</Typography>
                            </div>
                            <Typography variant="overline">Source: {song.src}</Typography>
                            
                        
                        </Grid>
                    );
                })}
            </section>
            </Grid>
        </>

    );
}

export default SongsList;
