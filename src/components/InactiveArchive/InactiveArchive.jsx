// this component will more or less mirror SongsList
// i'll add a "inProgress" boolean to the songs table which will default true
// logic for switching boolean to false will be embedded in the archive button in SongDetails


//!!!

/// it would seem that a POST to a new endpoint would make sense
// but that probably isn't really necessary here.  these are all just songs, just differentiated by completion status
// so the finished archive just needs to conditionally render what's false
// while the songsList component might need to get updated to conditionally render what's true
// or the other way around if the boolean we use is "finished" - which makes the most sense, probably.
import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent } from '@material-ui/core';
import useStyles from './InactiveArchiveStyles';
import Feedback from '@material-ui/icons/Feedback';



//import songDetails from '../../redux/reducers/songDetails.reducer';




function InactiveArchive() {

    const { 
             
            title1, 
            player, 
            card,  
            paper, 
            menuDots,
            blankPage,
            message,
            messageCard,
            messageDiv,
            feedback,
            heading,
            playIcon
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);

    const [listView, setListView] = useState();
    
    console.log(songs);

    const handleState = () => {
        
        if (songs.length > 0) 
            {setListView(true)}
            
            else 

            {setListView(false)};
        }


    //get db info on page load
    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS'
        });
        handleState();
    }, []);
    //push forward to details page on click

    const handleClick = (songId) => {
        history.push(`/InactiveSongDetails/${songId}`)
    }
    




    //because there is no color-coding involved in the inactive archive, 
    //there's much less code to deal with and thus no need to refactor.
    return (
            <>

                {listView ? 
                    
                    <Paper className={paper} elevation={10}>
                        
                        <div 
                            
                            className={menuDots}>

                        </div>

                            <div>
                                
                                <Typography 
                                    
                                    variant="overline"
                                    className={heading}
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

                :
                
                
                    <Paper className={blankPage}>
                        
                        <div>

                            <Card 
                                className={messageCard}
                                raised={true}
                            >
                            
                                <div>
                                    
                                    <Feedback className={feedback}/>
                                    
                                </div>
                            
                                    <div className={messageDiv}>
                                        
                                        <Typography
                            
                                            align="center"
                                            variant="h6"
                                            className={message}
                            
                                        >
                                        
                                            This inactive archive shows songs you've marked 
                                            as such when uploading.  It offers the option to catalog unfinished 
                                            material that hasn't been abandoned, but that is dormant for the moment.
                                            If you only see a blank page, there are currently no songs marked as inactive.

                                        </Typography>
                                    
                                    </div>
                            
                            </Card>

                        </div>

                    </Paper>

                }

            </>

    );

}

export default InactiveArchive;
