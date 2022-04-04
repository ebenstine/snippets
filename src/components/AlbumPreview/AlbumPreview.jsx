import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Dialog, Button } from '@material-ui/core';
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
            heading,
            summary
            
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const albumDetails = useSelector((store) => store.albumDetails);
    const albums = useSelector((store) => store.albums);
    const songs = useSelector((store) => store.songs);
    const [ editTitle, setEditTitle] = useState(false);
    const [ open, setOpen ] = useState(false);

    console.log(params);

    //get db info on page load
    useEffect(() => {
        
        dispatch({
            
            type: 'FETCH_SONGS',
            type: 'FETCH_ALBUM_DETAILS',
            payload: params.id,
            
        });
        
    },[dispatch]);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
      }
  

    const handleEditTitle = () => {
        setEditTitle(editTitle => !editTitle)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }
    return (
       
        <>                 
                    
            <Paper className={paper} elevation={10}>
                        
                {albumDetails.map((album) => {
                    
                    return (
                        
                        <>

                            <div key={album.id}>

                                {editTitle ?

                                    <AlbumTitle/>

                                :
                                    
                                    <div 

                                        onDoubleClick={handleEditTitle}
                                        style={{marginTop:'-1em'}}
                                        
                                    >
                                        <Typography variant="overline" className={heading} onClick={handleClickOpen}>
                                                
                                            <img src='groupsVinyl.png' style={{height:18, width:18}}></img>&nbsp;{album.title}

                                        </Typography>
                                        
                                    </div>
                                        
                                    
                                }

                                <Dialog
                                    PaperProps={{
                    
                                        style: { border: "1px solid #2a4f64", background: "rgb(199, 246, 252)" }
                    
                                    }}
                                    open={open} 
                                    
                                    onClose={handleClose}
                                
                                >
                                <div className={summary}>
                                    <Typography 
        
                                        align="center" 
                                        variant = "h6" 

                                    >

                                        
                                        Targeting release for:&nbsp;
                                       {album.release_range}

                                    </Typography>

                                    <Typography 
        
                                        align="center" 
                                        variant = "h6" 
                                    >

                                        
                                        The primary style of these songs is:&nbsp;
                                       {album.primary_style}

                                    </Typography>
                                </div>



                                </Dialog>

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