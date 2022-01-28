import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Typography, Card, CardContent, MenuItem } from '@material-ui/core';
import useStyles from './CustomListsStyles'
import { IndeterminateCheckBoxOutlined } from '@material-ui/icons';

const GroupUncertain = () => {

    const {

        card,
        title,
        player,
        colorCode
        
    } = useStyles();


    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);

    const [showGroupUncertain, setShowGroupUncertain] = useState();
    console.log(songs);

    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
       
    },[]);
    const handleShowGroup = () => {
        setShowGroupUncertain(true)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    return (
        <>
            <MenuItem
                className={colorCode}
                onClick={handleShowGroup}
            >
            
            <IndeterminateCheckBoxOutlined/>
            <Typography component="h5">
            &nbsp;Uncertain
            </Typography>
            
          </MenuItem>
         {showGroupUncertain ?

            songs.map((song) => {

              song.priority === 'Uncertain' ?

              <Box
                                                                    
                paddingTop={2}
            
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
                                        className={title}
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
            
            })

            :

                null
            
            }   
        
        </>


    )

    
}

export default GroupUncertain;