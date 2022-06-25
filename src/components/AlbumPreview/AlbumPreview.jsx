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

                            
                                <div style={{marginTop:'-1em', display:'flex', justifyContent:'center'}}>

                                    <AlbumTitle/>
                                    
                                            
                                </div>        
                                    

                                    
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

                                                                                        <div className={player1}>
                                                                                        <div>
                                                                                        <Typography 
                                                                                            variant="overline" 
                                                                                            className={title1}
                                                                                            onClick={() => handleClick(song.song_id)} 

                                                                                        >
                                                                                            
                                                                                            {song.title} <br></br>
                                                                                            
                                                                                        </Typography>
                                                                                        </div>

                                                                                            
                                                                                        
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
                                                                                        
                                                                                       
                                                                                    </div>
                                                                        


                                                                                    
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
                                                                                        <div>
                                                                                        <Typography 
                                                                                            variant="overline" 
                                                                                            className={title2}
                                                                                            onClick={() => handleClick(song.song_id)} 

                                                                                        >
                                                                                            
                                                                                            {song.title}
                                                                                            
                                                                                        </Typography>
                                                                                        </div>

                                                                                            
                                                                                
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

                                                                                <>

                                                                                        <section className={player3}>
                                                                                        <div>
                                                                                        <Typography 
                                                                                            variant="overline" 
                                                                                            className={title3}
                                                                                            onClick={() => handleClick(song.song_id)} 

                                                                                        >
                                                                                            
                                                                                            {song.title}
                                                                                            
                                                                                        </Typography>
                                                                                        </div>

                                                                                            
                                                                                
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
                                                                        
                                                                    

                                                                                    
                                                                                </>
                                                        
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
                            
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <AlbumReleaseRange/>
                            </div>
                            
                        </Paper>
                    </>
                )
            })}

        </>
            
    );

}

export default AlbumPreview;