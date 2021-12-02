import React, { useEffect } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Card, CardContent, CardActions } from '@material-ui/core';
import { Box, Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import useStyles from './SongsListStyles';
;

//import songDetails from '../../redux/reducers/songDetails.reducer';




function SongsList() {

    const { title, player, card, card1, card2, card3, paper, button, classes } = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);
    console.log(songs);
    const recordings = useSelector((store) => store.recordings);

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
                                        
                                            <Typography variant="h4" className={title}>{song.title}</Typography>
                                            
                                        

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
                                            <Typography variant="h4" className={title}>{song.title}</Typography>
            
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
                                            <Typography variant="h4" className={title}>{song.title}</Typography>
            
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
                                       <Typography variant="h4" className={title}>{song.title}</Typography>
       
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
