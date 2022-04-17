// this component will more or less mirror SongsList
// i'll add a "inProgress" boolean to the songs table which will default true
// logic for switching boolean to false will be embedded in the archive button in SongDetails


//!!!

/// it would seem that a POST to a new endpoint would make sense
// but that probably isn't really necessary here.  these are all just songs, just differentiated by completion status
// so the finished archive just needs to conditionally render what's not active (false)
// while the songsList component might need to get updated to conditionally render what's true
// or the other way around if the boolean we use is "finished" - which makes the most sense, probably.
import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './InactiveArchiveStyles';
import Feedback from '@material-ui/icons/Feedback';





function InactiveArchive() {

    const { 
             
            title1, 
            player, 
            card,  
            paper, 
            menuDots,
            heading,
            playIcon
            
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);
    
    console.log(songs);
    
    
    /*const handleState = () => {
        //checks for any occurrence of an inactive song
        if (songs.filter(e => e.is_active === false).length > 0) 
            {setListView(true)}
        
            else 

            {setListView(false)};
        }*/


    //get db info on page load
    useEffect(() => {
        
        dispatch({
            type: 'FETCH_SONGS',
            
        });
        //handleState();
    }, []);
    //push forward to details page on click

    const handleClick = (songId) => {
        history.push(`/InactiveSongDetails/${songId}`)
    }

    const goBack = () => {
        history.push(`/InactiveArchive`)
    }
    




    //because there is no color-coding involved in the inactive archive, 
    //there's much less code to deal with and thus no need to refactor.
    return (
        <> 
            <Paper className={paper} elevation={10}>
                
                <div 
                    
                    className={menuDots}>

                </div>

                    <div style={{marginTop:'-2.5em'}}>
                        
                        <Typography 
                            className={heading}
                            variant="overline"
                            
                        >

                            <span className={playIcon}>▶</span>     
                            Inactive Songs
                                    
                        </Typography>
                                
                    </div>
                
                <Box 
                
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
        
                    {songs.map((song) => {
                    
                        return (
                        
                                    <>
                        
                                        {song.is_active === false ?
                            
                                            <>
                            
                                                <Box paddingTop={2}>
                                    
                                                    <Card
                                        
                                                        raised={true}
                                                        className={card}
                        
                                                    > 
                                        
                                                        <section>

                                                            <CardContent 
                                
                                                                item xs={1} key={song} 
                                                                onClick={() => handleClick(song.song_id)} 
                            
                                                            >  
                                
                                                                <Typography 
                                                                    
                                                                    variant="overline" 
                                                                    className={title1}>{song.title}
                                                
                                                                </Typography>
                                    
                                                            </CardContent>
                            
                                                        </section>
                                                
                                                        <section className={player}>
                                            
                                                            <AudioPlayer

                                                                audioFiles={[{ src: song.preview_audio }]}
                                                                hideForward="true"
                                                                hideLoop="true"
                                                                hideRewind="true"
                                                                playIcon="playIcon.png"
                                                                playHoverIcon="playIcon.png"
                                                                pauseIcon="pauseIcon.png"
                                                                pauseHoverIcon="pauseIcon.png"
                                                                volumeIcon="volume.png"
                                                                volumeEngagedIcon="volume.png"
                                                                muteIcon="volume.png"
                                                                muteEngagedIcon="volume.png"

                                                            />
                                                
                                                        </section>

                                                    </Card> 

                                                </Box>
                            
                                                <br></br>
                                                <br></br>
                                
                                            </>
                
                                        :
                                        
                                        null
                                        
                                        }
                
                                    </>
                                );

                    })}

                </Box> 

            </Paper>

        </>

    );

}

export default InactiveArchive;