import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';

//import songDetails from '../../redux/reducers/songDetails.reducer';




function GroupOne() {

    const { 
            
            title, 
            title1, 
            title2, 
            title3, 
            player,
            player1,
            player2,
            player3, 
            card, 
            card1, 
            card2, 
            card3, 
            paper, 
            menuDots,
            blankPage,
            message,
            messageCard,
            messageDiv,
            feedback,
            heading,
            playIcon,
            hackButton
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);
    const songDetails = useSelector((store) => store.songDetails)

    const [listView, setListView] = useState(true);
    console.log(songs);


    
    
    /*const handleState = () => {
        setListView(listView = !listView)
    }*/
    const handleState = () => {
        
        if (songs.length === 0) 
            {setListView(false)}
            
        }   

    //get db info on page load
    useEffect(() => {
        handleState();
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
        
    },[]);
    //push forward to details page on click


    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    const goBack = () => {
        history.push(`/groupUncertain`)
    }

    
    




    //conditionally render cards with different background colors according to priority
        return (
        
            <>

                                        
                    <Paper className={paper} elevation={10}>
                        
                        <div className={menuDots}>

                            <ColorCodeLegend/>

                        </div>

                        <div>
                            <Typography 
                                
                                variant="overline"
                                className={heading}
                                
                            >

                            <img src='groupsVinyl.png' style={{height:18, width:18}}></img> ...


                            </Typography>
                        </div>
                        <Box 

                            display="flex"
                            flexWrap="wrap"
                            alignContent="flex-start"
                            
                            
                            
                        >
                        {/*if no distinction for what group to show is made, show all ternary statement would start here*/}
                                {songs.map((song) => {
                                    return (
                                        <>
                                        {song.is_active == true ?
                                        <>
                                    
                                            {song.priority === 'Uncertain' ? 
                                                
                                                <Box
                                                    paddingTop={2}
                                                    paddingRight={3.5}
                                                
                                                >
                                                    <Card
                                                        
                                                        raised={true}
                                                        className={card}
                                        
                                                    > 
                                                            <section>

                                                                <CardContent 
                                                
                                                                    item xs={1} key={song} 
                                                                    
                                            
                                                                >  
                                                
                                                                    <Typography 
                                                                        variant="overline" 
                                                                        className={title1}
                                                                        onClick={() => handleClick(song.song_id)} 

                                                                    >
                                                                        
                                                                        {song.title}
                                                                        
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
                                    
                                            null
                                            

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
                
    );

}

export default GroupOne;