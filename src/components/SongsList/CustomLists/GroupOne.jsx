import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Dialog, Typography, Card, CardContent, MenuItem } from '@material-ui/core';
import useStyles from './CustomListsStyles'
import { Album } from '@material-ui/icons';

const GroupOne = () => {

    const {

        card1,
        title1,
        player1,
        colorCode1

    } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);

    const [showGroupOne, setShowGroupOne] = useState();
    const [open, setOpen] = useState(false);
    console.log(songs);

    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
       
    },[]);
    const handleShowGroup = () => {
        setShowGroupOne(true)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <MenuItem
                className={colorCode1}
                onClick={handleShowGroup}
                
            >
            
            <Album/>
            <Typography component="h5">
            &nbsp;Group One
            </Typography>
            
          </MenuItem>
         
         
         {showGroupOne ?

            songs.map((song) => {

              song.priority === '1' ?

              
              <Box
                                                                    
                paddingTop={2}
            
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
            
            })

            :

                null
            
            }   
        
        </>


    )

    
}

export default GroupOne;