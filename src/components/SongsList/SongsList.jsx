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

    const { grid, title, root, card, paper, Item  } = useStyles();
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
//push forward to the form
    const handleNext = () => {
        console.log('clicked add song');
        history.push('/addSong')
    }

    
//basic material ui setup in return, plan to revisit this
    return (
        <>
            <Paper className={paper}>
            
            
            
            {songs.map((song) => {
                    return (
                        <>
                        <Card container justifyContent="center" spacing={1} raised={true}
                        
                        >
                        <section>
                        <CardContent className={card} item xs={1} key={song} 
                        onClick={() => handleClick(song.song_id)}>
                            <div>
                            <Typography variant="h4" className={title}>{song.title}</Typography>
                            </div>
                            <Box>
                            
                            {/*<Button variant="text" onClick={() => handleClick(song.song_id)}>Check Song Details</Button>*/}
                            
                            
                            </Box>
                        </CardContent>                              
                        </section>
                        
                            <AudioPlayer
                            
                            audioFiles={[{src: song.preview_audio}]}

                            />
                           
                        <CardActions >
                        </CardActions>    
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
