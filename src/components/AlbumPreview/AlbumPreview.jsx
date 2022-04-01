import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './AlbumPreviewStyles';
//import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';
import AlbumTitle from './AlbumTitle'
import ColorCodeLegend from '../SongsList/ColorCodeLegend';





function AlbumPreview() {

    const { 
            
            
            title1, 
            title2,
            title3,
            player1,
            player2,
            player3,
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
            hackButton
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const albumDetails = useSelector((store) => store.albumDetails);
    const albums = useSelector((store) => store.albums);
    const songs = useSelector((store) => store.songs);
    const [ editTitle, setEditTitle] = useState(false);
    const [listView, setListView] = useState(true);
    console.log(params);


    
    
    /*const handleState = () => {
        setListView(listView = !listView)
    }*/
    const handleState = () => {
        
        if (songs.length === 0) 
            {setListView(false)}
            
        }   


    //get db info on page load
    useEffect(() => {
        
        dispatch({
            type: 'FETCH_SONGS',
            type: 'FETCH_ALBUM_DETAILS',
            payload: params.id,
            
            

        
        });
        
    },[dispatch]);
    //push forward to details page on click

    const handleEditTitle = () => {
        setEditTitle(editTitle => !editTitle)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    

    
    




    //conditionally render cards with different background colors according to priority
    return (
       
        <>

             
                                    
                    <Paper className={paper} elevation={10}>
                        
                        <div className={menuDots}>

                            {/*<ColorCodeLegend/>*/}

                        </div>
                        
                        {albumDetails.map((album) => {
                            return (
                                <>

                                <div key={album.id}>

                                
                                    {editTitle ?

                                    <AlbumTitle/>

                                    :
                                    
                                    
                                    

                                        
                                        
                                        <div 
                                            onDoubleClick={handleEditTitle}
                                            style={{marginTop:'3.3em'}}
                                        
                                        >
                                            <Typography 
                                                
                                                variant="overline"
                                                className={heading}
                                                
                                            >
                                        
                                        <img src='groupsVinyl.png' style={{height:18, width:18}}></img>&nbsp;{album.title}


                                            </Typography>
                                        </div>
                                        
                                    
                                    }
                                        
                                        
                                        
                                    
                                    
                            
                            
                        <Box 

                            display="flex"
                            flexWrap="wrap"
                            alignContent="flex-start"
                            
                        >
                        {album.id === 1 ?
                            <>
                            
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
                    </>

                    :
                    
                    album.id === 2 ?
                        <>

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

                        </>
                    :

                    album.id === 3 ?

                        <>

                            {songs.map((song) => {
                                return (
                                    <>
                                        {song.is_active == true ?
                                            <>
                                
                                                {song.priority === '3' ? 
                                                    
                                                    <Box
                                                        paddingTop={2}
                                                        paddingRight={3.5} 
                                                    
                                                    >
                                                        <Card
                                                            
                                                            raised={true}
                                                            className={card3}
                                                            
                                            
                                                        > 
                                                                <section>

                                                                    <CardContent 
                                                    
                                                                        item xs={1} key={song} 
                                                                        
                                                
                                                                    >  
                                                    
                                                                        <Typography 
                                                                            variant="overline" 
                                                                            className={title3}
                                                                            onClick={() => handleClick(song.song_id)} 

                                                                        >
                                                                            
                                                                            {song.title}
                                                                            
                                                                        </Typography>
                                                        
                                                    

                                                                    </CardContent>
                                                
                                                                </section>
                                                                    
                                                                    <section className={player3}>
                                                                
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

                        </>
                    :

                    null

                    }
                        

                </Box> 
                </div>
            </>
                )
            })}

            </Paper>
    
        </>
            
);

}

export default AlbumPreview;