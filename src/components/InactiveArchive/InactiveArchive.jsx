// this component will more or less mirror SongsList
// i'll add a "inProgress" boolean to the songs table which will default true
// logic for switching boolean to false will be embedded in the archive button in SongDetails


//!!!

/// it would seem that a POST to a new endpoint would make sense
// but that probably isn't really necessary here.  these are all just songs, just differentiated by completion status
// so the finished archive just needs to conditionally render what's false
// while the songsList component might need to get updated to conditionally render what's true
// or the other way around if the boolean we use is "finished" - which makes the most sense, probably.
import React, { useEffect } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent } from '@material-ui/core';
import useStyles from './InactiveArchiveStyles';

;

//import songDetails from '../../redux/reducers/songDetails.reducer';




function InactiveArchive() {

    const { 
            
            title, 
            title1, 
            title2, 
            title3, 
            player, 
            card, 
            card1, 
            card2, 
            card3, 
            paper, 
            message,
            menuDots 
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);
    console.log(songs);


    //get db info on page load
    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS'
        });
    }, []);
    //push forward to details page on click

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }
    




    //conditionally render cards with different background colors according to priority
    return (
        <>
            <Paper className={paper} elevation={10}>
                <div className={menuDots}>

                
                </div>

                <Box 
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                {/*if no distinction for what group to show is made, show all ternary statement would start here*/}
                
                        {songs.map((song) => {
                            return (
                                <>
                                {song.is_active === false ?
                                <>
                                    {song.priority === '1' ? 
                                        
                                        <Box
                                            
                                            paddingTop={2}
                                        
                                        >
                                            <Card
                                                
                                                raised={true}
                                                className={card1}
                                
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
                                    : 
                            
                                    song.priority === '2' ?
                            
                                        <Box
                                            
                                            paddingTop={2}
                            
                                        >
                                            <Card
                                
                                                raised={true}
                                                className={card2}
                                            
                                            > 
                                                <section> 
                                        
                                                    <CardContent 
        
                                                        item xs={1} key={song} 
                                                        onClick={() => handleClick(song.song_id)} 
    
                                                    >  
        
                                                        <div>
                                            
                                                            <Typography 
                                                                    
                                                                variant="overline" 
                                                                className={title2}>{song.title}
                                                            
                                                            </Typography>
            
                                                        </div>

                                                    </CardContent>
    
                                                </section>
                                
                                                    <section className={player}>
                                    
                                                        <AudioPlayer

                                                            audioFiles={[{ src: song.preview_audio }]}

                                                        />
                                                    
                                                    </section>

                                            </Card>
                            
                                        </Box>
                            
                                    : 

                                    song.priority === '3' ?
                                    
                                        <Box
                                            
                                            paddingTop={2}
                    
                                        >
                                        
                                            <Card
                        
                                                raised={true}
                                                className={card3}
                                    
                                            > 
                                                
                                                <section> 
                                
                                                    <CardContent 

                                                        item xs={1} key={song} 
                                                        onClick={() => handleClick(song.song_id)} 

                                                    >  

                                                        <div>
                                    
                                                            <Typography 
                                                            
                                                                variant="overline" 
                                                                className={title3}>{song.title}
                                                    
                                                            </Typography>
    
                                                        </div>

                                                    </CardContent>

                                                </section>
                        
                                                    <section className={player}>
                            
                                                        <AudioPlayer

                                                            audioFiles={[{ src: song.preview_audio }]}

                                                        />
                                            
                                                </section>

                                            </Card>
                    
                                        </Box>
                                    : 
                            
                                        <Box
                                       
                                            paddingTop={2}
                                        
                                        >
                                
                                            <Card
                           
                                                raised={true}
                                                className={card}
                                            
                                            > 
                                                
                                                <section> 
                                            
                                                    <CardContent 
   
                                                        item xs={1} key={song} 
                                                        onClick={() => handleClick(song.song_id)} 

                                                    >  
   
                                                        <div>
                                                
                                                            <Typography 
                                                        
                                                                variant="overline" 
                                                                className={title}>{song.title}
                                                        
                                                            </Typography>
       
                                                        </div>

                                                    </CardContent>

                                                </section>
                           
                                                    <section className={player}>
                               
                                                        <AudioPlayer

                                                             audioFiles={[{ src: song.preview_audio }]}

                                                        />
                                                    </section>

                                            </Card>
                                        </Box>
                                    }
                                    
                                
                                
                            
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
//ternary statement : would go here, with priority group rendering to follow?
);

}

export default InactiveArchive;
