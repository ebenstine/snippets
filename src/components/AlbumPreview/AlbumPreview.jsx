import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { 
        Box, 
        Paper, 
        Typography, 
        Dialog, 
        DialogTitle, 
        
    } 
        from '@material-ui/core';
import useStyles from './AlbumPreviewStyles';
import AlbumTitle from './AlbumTitle'
import AlbumStyle from './AlbumStyle'
import AlbumReleaseRange from './AlbumReleaseRange'

function AlbumPreview() {

    const { 
            
            
            title1, 
            title2,
            title3,
            player1,
            player2,
            player3,
            card,
            paper1,
            paper2,
            paper3,
            heading1,
            heading2,
            heading3,
            dialogHeading,
   
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

                                            &nbsp;{album.title}

                                        </Typography>
                                    :
                                    album.id === 2 ?
                                    
                                        <Typography variant="overline" className={heading2} onClick={handleClickOpen}>

                                            &nbsp;{album.title}

                                        </Typography>
                                    :
                                    album.id === 3? 

                                        <Typography variant="overline" className={heading3} onClick={handleClickOpen}>


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

                                        <Box sx =
                                            {{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "center"
                                            }}
                                        >
                                            {album.id === 1 ?
                                
                                                <>
                                                    <div className={card}>
                                                        {songs.map((song) => {
                                                            return (
                                                                <>
                                                                    {song.is_active == true ?
                                                                        <>
                                                                            {song.priority === '1' ? 

                                                                                <div>

                                                                                        <section className={player1}>

                                                                                        <Typography 
                                                                                            variant="overline" 
                                                                                            className={title1}
                                                                                            onClick={() => handleClick(song.song_id)} 

                                                                                        >
                                                                                            
                                                                                            {song.title}
                                                                                            
                                                                                        </Typography>

                                                                                            
                                                                                
                                                                                        <AudioPlayer

                                                                                            audioFiles={[{ src: song.preview_audio }]}
                                                                                            hideForward="true"
                                                                                            hideLoop="true"
                                                                                            hideRewind="true"
                                                                                            hideName="true"
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
                                                                        
                                                                    

                                                                                    
                                                                                </div>
                                                        
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
                                                    </div>

                                                </>

                                            :
                        
                                            album.id === 2 ?
                                                <>
                                                    <div className={card}>
                                                        {songs.map((song) => {
                                                            return (
                                                                <>
                                                                    {song.is_active == true ?
                                                                        <>
                                                                            {song.priority === '2' ? 

                                                                                <div>

                                                                                        <section className={player2}>

                                                                                        <Typography 
                                                                                            variant="overline" 
                                                                                            className={title2}
                                                                                            onClick={() => handleClick(song.song_id)} 

                                                                                        >
                                                                                            
                                                                                            {song.title}
                                                                                            
                                                                                        </Typography>

                                                                                            
                                                                                
                                                                                        <AudioPlayer

                                                                                            audioFiles={[{ src: song.preview_audio }]}
                                                                                            hideForward="true"
                                                                                            hideLoop="true"
                                                                                            hideRewind="true"
                                                                                            hideName="true"
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
                                                                        
                                                                    

                                                                                    
                                                                                </div>
                                                        
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
                                                    </div>

                                                </>
                                            :

                                            album.id === 3 ?

                                                <>

                                                    <div className={card}>
                                                        {songs.map((song) => {
                                                            return (
                                                                <>
                                                                    {song.is_active == true ?
                                                                        <>
                                                                            {song.priority === '3' ? 

                                                                                <div>

                                                                                        <section className={player3}>

                                                                                        <Typography 
                                                                                            variant="overline" 
                                                                                            className={title3}
                                                                                            onClick={() => handleClick(song.song_id)} 

                                                                                        >
                                                                                            
                                                                                            {song.title}
                                                                                            
                                                                                        </Typography>

                                                                                            
                                                                                
                                                                                        <AudioPlayer

                                                                                            audioFiles={[{ src: song.preview_audio }]}
                                                                                            hideForward="true"
                                                                                            hideLoop="true"
                                                                                            hideRewind="true"
                                                                                            hideName="true"
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
                                                                        
                                                                    

                                                                                    
                                                                                </div>
                                                        
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
                                                    </div>

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