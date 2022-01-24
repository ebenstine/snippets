//this will get pulled into songDetails, in a similar fashion to addRecording
//likely should be an mui drawer that pops out from the left

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, AccordionSummary, Paper, Typography, MenuItem, Button, Drawer } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Delete from '@material-ui/icons/Delete';
import QueueMusic from '@material-ui/icons/QueueMusic';
import AudioPlayer from "react-modular-audio-player";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from './RecordingsListStyles';

const RecordingsList = () => {
    const { 
            paper, 
            description, 
            player, 
            card1, 
            drawer, 
            drawerHeader, 
            background, 
            view, 
            bye,
            firstRecording,
            cuteStar
        
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const recordings = useSelector((store) => store.recordings);
    const songs = useSelector ((store) => store.songs)
    const params = useParams();
    let [isDrawerOpen, setIsDrawerOpen] = useState(false);
    let [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [showHeading, setShowHeading] = useState(false);
    const [showExtraText, setShowExtraText] = useState()
    
   
    console.log(recordings);
    console.log(recordings[0]);

    const handleClickOpen = () => {
        if (recordings === null) {
            setIsDrawerOpen(false)
        } else 
        setIsDrawerOpen(true);
        
        dispatch({
            type: 'FETCH_RECORDINGS',
            payload: params.id
           
        });

        if (recordings.length > 1) {
            setShowHeading(true)
        } else
            setShowHeading(false);
        
    };

    const handleTextState = () => {
        
        
        //all this is doing is asking if recordings[0] exists, so of course it doesn't work.
            if (recordings.id === recordings[0]) {
                setShowExtraText(true)
            } 
            else 
            {
            if (recordings.id !== recordings[0]) {
                setShowExtraText(false)
            }
           
        }
    }


    

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
            <MenuItem 
                
                onClick={handleClickOpen}
                className={view}
            >
                <QueueMusic/>
                
                &nbsp;View All
            
            </MenuItem>

         
            <Drawer
                
                className={drawer}
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                onClose={handleCancel}
            
            >
            
            
                    <Paper 
                            
                        className= {paper} 
                        elevation={10}
                    >
                        
                        <div className={drawerHeader}>
                            
                            <IconButton 
                            
                                onClick={handleCancel}
                                style={{
                                    
                                    color:"#eb9148"
                                
                                }}
                            
                            >
                                
                                <ChevronLeftIcon/>
                                    
                                    </IconButton>
                            
                                        <Typography 
                                
                                            style={{
                                                
                                                borderBottom: "1.5px solid #1d778d",
                                                fontSize: 16,
                                                color: "#233d4d"
                                            
                                            }}
                                            variant="overline" 
                                            align="center"

                                        >
                                        
                                            Recordings History 
                                        
                                        </Typography>
                            
                                            
                        </div>
                            
                            <br></br>
                            
                            <div>
                        
                                <Typography variant="overline" className={firstRecording}>

                                    &nbsp;&nbsp;<span className={cuteStar}>*</span> original upload <span className={cuteStar}>*</span>
                                    
                                </Typography>
                                

                            {/*{showHeading ? 


                                
                                
                                    <Typography variant="body2" className={firstRecording}>

                                        &nbsp;&nbsp;<span className={cuteStar}>*</span> Additional Recordings

                                    </Typography>           

                                

                            :

                            null
                            
                            }*/}
                        </div>
                            
                        {recordings.map((recording) => {
                                
                            
                                return (
                                    
                                    <>
                                        
                                        <div className={background}>
                                        
                                            <Accordion
                                                
                                                raised={true}
                                                className={card1}
                                                
                                            >
                                                
                                                <AccordionSummary
                                                    
                                                    expandIcon=
                                                        
                                                        {<ExpandMoreIcon 
                                                        
                                                            style={{ 
                                                            
                                                            color: '#eb9148',
                                                            paddingRight: '.75em',
                                                            
                                                            
                                                            }}
                                                            onClick={handleTextState}
                                                            
                                                        />}

                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    item xs={1} key={recording.id}
                                            
                                                >

                                                    <section className={player}>
                                                    
                                                        <AudioPlayer

                                                            audioFiles={[{ src:recording.src}]}

                                                        />
                                                    </section>
                                                    
                                                        </AccordionSummary>
                                            
                                                            <div>
                                                            
                                                            {showExtraText ?

                                                                <Typography 
                                                                
                                                                    variant="h6" 
                                                                    className={description}>
                                                                    This is the primary recording for &nbsp;
                                                                    {recording.description} 
                                                                    
                                                                    
                                                                </Typography>
                                                            :

                                                            <Typography 
                                                                
                                                                    variant="h6" 
                                                                    className={description}>
                                                                    {recording.description} 
                                                                    
                                                                    
                                                                </Typography>
                                                            
                                                            }
                                                        
                                                            </div>
                                                
                                                            <Button 
                                                                
                                                                variant="contained" 
                                                                onClick={() => handleDeleteAudio(recording.id)} 
                                                                className={bye}>
                                                                <Delete/>

                                                            </Button>
                                                
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




















