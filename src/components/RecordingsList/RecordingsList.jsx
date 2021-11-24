//this will get pulled into songDetails, in a similar fashion to addRecording
//likely should be an mui drawer that pops out from the left

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, AccordionSummary, Paper, Typography, MenuItem, Button, InputLabel, Select, Card, Drawer, CardContent, Box, ListItemText, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Delete from '@material-ui/icons/Delete';
import AudioPlayer from "react-modular-audio-player";
import useStyles from './RecordingsListStyles';

const RecordingsList = () => {
    const { paper, description, player, card1, drawer, background, view, bye} = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const recordings = useSelector((store) => store.recordings);
    const songs = useSelector ((store) => store.songs)
    const params = useParams();
    let [isDrawerOpen, setIsDrawerOpen] = useState(false);
    let [isAccordionOpen, setIsAccordionOpen] = useState(false);
    

    

    const handleClickOpen = (recordings) => {
        if (recordings === null) {
            setIsDrawerOpen(false)
        } else 
        setIsDrawerOpen(true);
        dispatch({
            type: 'FETCH_RECORDINGS',
            payload: params.id
           
        });
        
    };
    

    const handleCancel = () => {
        setIsDrawerOpen(false);
    }

    const handleDeleteAudio = (recordingId) => {
        console.log(recordingId);
        dispatch({
            type: 'DELETE_AUDIO',
            payload: recordingId
        })
    }

    return (
        <>
            <MenuItem onClick={handleClickOpen} className={view}>View All</MenuItem>
            <Drawer
                className={drawer}
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                
                onClose={handleCancel}
            >
            
            
            <Paper className= {paper} elevation={10}>
                
                {recordings.map((recording) => {
                    
                   
                    return (
                        <>
                            
                            <div className={background}>
                                
                                <Accordion
                                    
                                    raised={true}
                                    className={card1}
                                    
                                >
                               
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        color='#2a4f64'
                                    

                                        item xs={1} key={recording.id}
                                  
                                    >



                                    <section className={player}>
                                        <AudioPlayer

                                            audioFiles={[{ src:recording.src}]}

                                    />
                                    </section>
                                        
                                    </AccordionSummary>
                                
                                    <div>
                                        <Typography variant="h6" className={description}>{recording.description}</Typography>
                                            
                                    </div>
                                    
                                    <Button variant="text" onClick={handleDeleteAudio} className={bye}><Delete/></Button>
                                    
                                </Accordion>
                            </div>
                            
                            <br></br>
                        </>
                    )
                })}
            </Paper>
            
            </Drawer>


        </>

    )
}
            

export default RecordingsList;































