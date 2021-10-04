import React, { useEffect } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Card, CardContent, CardActions } from '@material-ui/core';
import { Box, Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import useStyles from './SongsListStyles';
import axios from 'axios';
import songState from '../../redux/reducers/settingSong.reducer';
import songDetails from '../../redux/reducers/songDetails.reducer';




function SongsList() {

    const {  title, player, card, paper } = useStyles();
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
        

        history.push(`/songDetails/${songId}`)
    }



    
//basic material ui setup in return, plan to revisit this
    return (
        <>
            <Paper className={paper} elevation={10}>
            
            
            
            {songs.map((song) => {
                    return (
                        <>
                        <Card className={card} container justifyContent="right" spacing={1} raised={true}
                        
                        >
                        <section>
                        <CardContent item xs={1} key={song} 
                        onClick={() => handleClick(song.song_id)}>
                            <div>
                            <Typography variant="h4" className={title}>{song.title}</Typography>
                            </div>
                          
                        </CardContent>                              
                        </section>
                            <section className={player}>
                            <AudioPlayer
                            
                            audioFiles={[{src: song.preview_audio}]}

                            />
                            </section>
                       
                        </Card>
                       <br></br>
                       <br></br>
                        </>
                        
                    );
                })}
            
           
            
            </Paper>
        
        </>

    );
}

export default SongsList;
