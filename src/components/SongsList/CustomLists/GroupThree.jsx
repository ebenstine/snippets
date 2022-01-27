import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Typography, Card, CardContent, MenuItem } from '@material-ui/core';
import useStyles from './CustomListsStyles'
import { Album } from '@material-ui/icons';

const GroupThree = () => {

    const {

        card3,
        title3,
        player3,
        colorCode3
        
    } = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);

    const [showGroupThree, setShowGroupThree] = useState();
    console.log(songs);

    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
       
    },[]);
    const handleShowGroup = () => {
        setShowGroupThree(true)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    return (
        <>
            <MenuItem
                className={colorCode3}
                onClick={handleShowGroup}
            >
            
            <Album/>
            <Typography component="h5">
            &nbsp;Group Three
            </Typography>
            
          </MenuItem>
         {showGroupThree ?

            songs.map((song) => {

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
            
            })

            :

                null
            
            }   
        
        </>


    )

    
}

export default GroupThree;