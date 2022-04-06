import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { 
        Box, 
        Paper, 
        Typography, 
        Card, 
        CardContent, 
        Dialog, 
        DialogTitle, 
        DialogContent,  
        Button 
    } 
        from '@material-ui/core';
import useStyles from './AlbumPreviewStyles';
//import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';
import AlbumTitle from './AlbumTitle'
import AlbumStyle from './AlbumStyle'
import AlbumReleaseRange from './AlbumReleaseRange'
import ColorCodeLegend from '../SongsList/ColorCodeLegend';
import './slider.css'





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
            paper1,
            paper2,
            paper3,
            heading1,
            heading2,
            heading3,
            summary,
            editField,
            detailHeading,
            dialogHeading,
            albumSpec,
            
            
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const albumDetails = useSelector((store) => store.albumDetails);
    const songs = useSelector((store) => store.songs);
   
    const [ open, setOpen ] = useState(false);

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
  
    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }
    return (
       
        <>                 
           
            {albumDetails.map((album) => {
                
                return (
                    
                    <>
                        <Paper 

                            className=
                                {album.id === 1 ?
                                    paper1
                                :
                                album.id === 2 ?
                                    paper2 
                                :
                                album.id === 3 ?
                                    paper3
                                :
                                null
                                }
                            elevation={10}
                        >

                            <div key ={album.id}>

                            
                                <div style={{marginTop:'-1em'}}>

                                    {album.id === 1 ?

                                        <Typography variant="overline" className={heading1} onClick={handleClickOpen}>

                                        
                                                
                                            <img src='album1.png' style={{height:18, width:18}}></img>

                                            &nbsp;{album.title}

                                        </Typography>
                                    :
                                    album.id === 2 ?
                                    
                                        <Typography variant="overline" className={heading2} onClick={handleClickOpen}>

                                            
                                                    
                                            <img src='album2.png' style={{height:18, width:18}}></img>

                                            &nbsp;{album.title}

                                        </Typography>
                                    :
                                    album.id === 3? 

                                        <Typography variant="overline" className={heading3} onClick={handleClickOpen}>

                                                
                                                        
                                            <img src='album3.png' style={{height:18, width:18}}></img>

                                            &nbsp;{album.title}

                                        </Typography>
                                    :

                                    null 
                                    }
                                    
                                            
                                </div>        
                                    

                                    <Dialog
                                        
                                        PaperProps={{
                        
                                            style: { border: "1px solid #2a4f64", background: "rgb(199, 246, 252)" }
                        
                                        }}
                                        open={open} 
                                        
                                        onClose={handleClose}
                                    
                                    >
                                        <DialogTitle>
                                            <Typography 
                        
                                                className={dialogHeading}>
                                            
                                                    Album Details
                                            
                                            </Typography>

                                        </DialogTitle>
                                        {/*refactored components*/}

                                            <AlbumTitle/>
                                        
                                                <br></br>
                                        
                                                    <AlbumReleaseRange/>
                                        
                                                        <br></br>
                                        
                                                            <AlbumStyle/>

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
                                                                                                    sliderClass="slider"

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
                        </Paper>
                    </>
                )
            })}

        </>
            
    );

}

export default AlbumPreview;