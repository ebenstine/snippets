import React, { useEffect } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
;

//import songDetails from '../../redux/reducers/songDetails.reducer';




function SongsList() {

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

                <ColorCodeLegend/>

                </div>

                <Box 
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                
                        {songs.map((song) => {
                            return (
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

                    );

                })}

         </Box> 

    </Paper>
</>
);

}

export default SongsList;