import React, { useEffect } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Card, CardContent, CardActions } from '@material-ui/core';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import axios from 'axios';
import songState from '../../redux/reducers/settingSong.reducer';

function SongsList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);
    console.log(songs);
    const recordings = useSelector((store) => store.recordings);

    //get db info on page load
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_SONGS' });
    }, []);
    //push forward to details page on click
    const handleClick = (songId) => {
        console.log('you clicked on:', songId);
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: songId,
        });

        history.push('/songDetails')
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
            <section className="songs">
            {songs.map((song) => {
                    return (
                        <Grid item md={3} key={song} >
                            <div>
                            <Typography variant="overline">"{song.title}"</Typography>
                            </div>
                            
                            <div>
                            <Button variant="text" onClick={() => handleClick(song.song_id)}>See Details</Button>

                            </div>
                            
                            <Button variant="text" onClick={() => dispatch ({type: 'DELETE_SONG'})}>Delete Song</Button>                          

                        
                            <AudioPlayer
                            
                            audioFiles={[{src: song.preview_audio}]}

                            />
                            
                        
                        </Grid>
                    );
                })}
            </section>
            </Grid>
        </>

    );
}

export default SongsList;
