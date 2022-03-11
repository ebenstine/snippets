import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';






function GroupTwo() {

    const { 
            
            
            title2, 
            player2,
            card2, 
            paper, 
            menuDots,
            blankPage,
            message,
            messageCard,
            messageDiv,
            feedback,
            heading,
            hackButton
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    
    const songs = useSelector((store) => store.songs);
    const albums = useSelector((store) => store.albums);

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
            type: 'FETCH_ALBUMS'
        
        });
        
    },[]);
    //push forward to details page on click


    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    const goBack = () => {
        history.push(`/groupTwo`)
    }

    
    




    //conditionally render cards with different background colors according to priority
    return (
       
    

            <>

            {listView ?  
                                    
                                    <Paper className={paper} elevation={10}>
                                        
                                        <div className={menuDots}>

                                            <ColorCodeLegend/>

                                        </div>

                                        {albums.map((album) => {
                                            return (
                                                <>
                                                    {album === albums[1] ?
                                                        <div>
                                                            <Typography 
                                                                
                                                                variant="overline"
                                                                className={heading}
                                                                
                                                            >
                                                        
                                                        <img src='groupsVinyl.png' style={{height:18, width:18}}></img>&nbsp;{album.title}


                                                            </Typography>
                                                        </div>
                                                    :
                                                        null
                                                    }
                                            </>
                                            )
                                        })}
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
                                                    
                                                            {song.priority === '2' ? 
                                                                
                                                                <Box
                                                                 paddingTop={2}
                                                                 paddingRight={3.5}

                                                                >
                                                                    <Card
                                                                        
                                                                        raised={true}
                                                                        className={card2}
                                                        
                                                                    > 
                                                                            <section>

                                                                                <CardContent 
                                                                
                                                                                    item xs={1} key={song} 
                                                                                    
                                                            
                                                                                >  
                                                                
                                                                                    <Typography 
                                                                                        variant="overline" 
                                                                                        className={title2}
                                                                                        onClick={() => handleClick(song.song_id)} 

                                                                                    >
                                                                                        
                                                                                        {song.title}
                                                                                        
                                                                                    </Typography>
                                                                    
                                                                

                                                                                </CardContent>
                                                            
                                                                            </section>
                                                                                
                                                                                <section className={player2}>
                                                                            
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
                    :
                    //this conditional render is meant essentially as a welcome/here's what to do
                    //message for when the user might explore the app before uploading anything.

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
                                    
                                        This page will contain a compartmentalized view of songs in the second priority tier only.

                                    </Typography>
                                
                                </div>
                        
                        </Card>
                            
                            <Button 
                                onClick={goBack}
                                className={hackButton}
                                variant="outlined"
                                >See List
                            </Button>

                    </div>

                </Paper>
                                    
            }


        </>
            
);

}

export default GroupTwo;