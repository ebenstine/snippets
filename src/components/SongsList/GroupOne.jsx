import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';






function GroupOne() {

    const { 
            
            
            title1, 
            player1,
            card1, 
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
    
    const songDetails = useSelector((store) => store.songDetails);
    const albums = useSelector((store) => store.albums);
    const songs = useSelector((store) => store.songs);
    const [ editTitle, setEditTitle] = useState(false);
    const [listView, setListView] = useState(true);
   


    
    
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
            
            type: 'FETCH_ALBUMS',
            type: 'FETCH_SONGS'

        
        });
        
    },[]);
    //push forward to details page on click

    const handleEditTitle = () => {
        setEditTitle(editTitle => !editTitle)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)

    }

    const handleAlbumDetails = (id) => {
        history.push(`/albumPreview/${id}`)
    }

    const goBack = () => {
        history.push(`/groupOne`)
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

                                {album === albums[0] ?
                                    editTitle ?

                                    <AlbumTitle/>

                                    :
                                    
                                    
                                    

                                        
                                        
                                        <div onDoubleClick={handleEditTitle}>
                                            <Typography 
                                                
                                                variant="overline"
                                                className={heading}
                                                onClick={handleAlbumDetails(album.id)}
                                                
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
                            
                                {songs.map((song) => {
                                    return (
                                        <>
                                        {song.is_active == true ?
                                        <>
                                    
                                            {song.priority === '1' ? 
                                                
                                                <Box
                                                    paddingTop={2}
                                                    paddingRight={3.5} 
                                                
                                                >
                                                    <Card
                                                        
                                                        raised={true}
                                                        className={card1}
                                                        
                                        
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
                                                                
                                                                <section className={player1}>
                                                            
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
                                    
                                        This page will contain a compartmentalized view of songs in the first priority tier only.

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

export default GroupOne;