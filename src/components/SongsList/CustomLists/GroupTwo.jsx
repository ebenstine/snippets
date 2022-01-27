import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Typography, Card, CardContent, MenuItem } from '@material-ui/core';
import useStyles from './CustomListsStyles'
import { Album } from '@material-ui/icons';


const GroupTwo = () => {

    const {

        card2,
        title2,
        player2,
        colorCode2
        
    } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);

    const [showGroupTwo, setShowGroupTwo] = useState();
    console.log(songs);

    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
       
    },[]);
    const handleShowGroup = () => {
        setShowGroupTwo(true)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    return (
        <>
            <MenuItem
                className={colorCode2}
                onClick={handleShowGroup}
            >
            
            <Album/>
            <Typography component="h5">
            &nbsp;Group Two
            </Typography>
            
          </MenuItem>
         {showGroupTwo ?

            songs.map((song) => {

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
            
            })

            :

                null
            
            }   
        
        </>


    )

    
}

export default GroupTwo;