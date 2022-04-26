//this will get pulled into songDetails, in a similar fashion to addRecording
//likely should be an mui drawer that pops out from the left

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Accordion, 
    AccordionSummary, 
    Paper, 
    Typography, 
    MenuItem, 
    Button, 
    Drawer,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    
} 
    
from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Delete from '@material-ui/icons/Delete';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import AudioPlayer from "react-modular-audio-player";
import IconButton from "@material-ui/core/IconButton";
import Feedback from '@material-ui/icons/Feedback';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from './RecordingsListStyles';
import { Cancel } from '@material-ui/icons';
import QueueMusic from '@material-ui/icons/QueueMusic';
import MicIcon from '@mui/icons-material/Mic';

const RecordingsList = () => {
    const { 
            paper, 
            description, 
            player, 
            player1,
            player2,
            player3,
            card1,
            card2,
            card3,
            card,
            drawer, 
            drawerHeader, 
            background, 
            view, 
            bye,
            deletePrompt,
            dialog,
            dialogContent,
            dialogText,
            cancelButton,
            deleteButton
        
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const recordings = useSelector((store) => store.recordings);
    const songDetails = useSelector ((store) => store.songDetails)
    const params = useParams();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showHeading, setShowHeading] = useState(false);
    const [showExtraText, setShowExtraText] = useState()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

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

    const handleDialogOpen = () => {
        setIsDialogOpen(true)
    }

    function handleTextState() {
        
        
        //loop to determine if the recording is the original. if so, change the state.
            let recording;
            for (recording of recordings) {
        
            if (recording === recordings[0]) {
                setShowExtraText(true)
            } 
            else 
            
            if (recording !== recordings[0]) {
                setShowExtraText(false)
            }
           
        }
    };
    
    
    


    

    const handleCancel = () => {
        setIsDrawerOpen(false);
    }

    const handleDialogClose = () => {
        setIsDialogOpen(false)
    }

    const handleDeleteAudio = (recordingId) => {
        
        console.log(recordingId);
        dispatch({
            type: 'DELETE_AUDIO',
            payload: recordingId
        })
        //hiding the lack of live updating here but whatev
        setIsDrawerOpen(false);
        setIsDialogOpen(false);
    }

    return (
        <>
            <MenuItem 
                
                onClick={handleClickOpen}
                className={view}
            >
                
                <MicIcon style={{color:'#233d4d'}}/>
                
                &nbsp;Manage All
            
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
                        <div style={{display:'flex', justifyContent: 'center', paddingBottom: '2em'}}>
                            <MicIcon
                                style=
                                {{
                                    width:50, 
                                    height:50, 
                                    display:'flex', 
                                    color: '#1d778d', 
                                    justifyContent: 'center'
                                }} 
                            
                            />

                        </div>
                        
                        <div className={drawerHeader}>
                            
                            <IconButton 
                            
                                onClick={handleCancel}
                                style={{
                                    
                                    color:"#1d778d"
                                
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
                            
                            
                            
                                {recordings.map((recording) => {
                                
                            
                                    return (
                                    
                                        <>
                                        
                                            <div className={background}>
                                        
                                                {songDetails.map((song) => {
                                
                            
                                                    return (
                                    
                                                
                                               
                                                    
                                                        <Accordion
                                                            
                                                            raised={true}
                                                        
                                                            className=

                                                                {song.priority === '1' ? 
                                                                    card1
                                                                :
                                                                song.priority === '2' ?
                                                                    card2
                                                                :
                                                                song.priority === '3' ?
                                                                    card3
                                                                :
                                                                    card
                                                                }
                                                                
                                                        >
                                                    
                                                            <AccordionSummary
                                                                
                                                                expandIcon=
                                                                    
                                                                    {<ExpandMoreIcon 
                                                                    
                                                                        style={{ 
                                                                        
                                                                        color: '#1d778d',
                                                                        paddingRight: '.75em',
                                                                        
                                                                        
                                                                        }}
                                                                        onClick={handleTextState}
                                                                        
                                                                    />}

                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                                item xs={1} key={recording.id}
                                                        
                                                            >
                                                                
                                                                <section className=

                                                                    {song.priority === '1' ?
                                                                        player1
                                                                    :

                                                                    song.priority === '2' ?
                                                                       player2
                                                                       
                                                                    : 

                                                                    song.priority === '3' ?
                                                                        player3
                                                                    
                                                                    :

                                                                        player
                                                                    }

            
                                                                
                                                                >
                                                                
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src:recording.src}]}
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
                                                                
                                                            </AccordionSummary>
                                                        
                                                                        <div>
                                                                            
                                                                            {recording === recordings[0] ?
                                                                                <>
                                                                                    {song.priority === '1' || song.priority === '2' ?
                                                                                        <Typography 
                                                                                            
                                                                                            className={description}>
                                                                                            The selected preview recording for {''}
                                                                                            {recording.description};{''} this is the most complete current version of the song.
                                                                                            
                                                                                            
                                                                                        </Typography>
                                                                                        :
                                                                                    

                                                                                        <Typography 
                                                                                            
                                                                                            className={description}>
                                                                                            The best take of the original idea for {''}
                                                                                            {recording.description}.
                                                                                            
                                                                                            
                                                                                        </Typography>

                                                                                    }
                                                                                </>
                                                                            :

                                                                                <Typography 
                                                                                
                                                                                     
                                                                                    className={description}>
                                                                                    {recording.description} 
                                                                                    
                                                                                    
                                                                                </Typography>
                                                                                
                                                                            
                                                                            }
                                                                    
                                                                        </div>

                                                                            <Button 
                                                                                className={deletePrompt}
                                                                                
                                                                                onClick={handleDialogOpen}
                                                                            >
                                                                                <Delete/>
                                                                            </Button>

                                                                            <Dialog 
                                                                                
                                                                                open={isDialogOpen} 
                                                                                PaperProps={{
                                                                                    style: 
                                                                                        { border: "1px solid #e45252",
                                                                                            
                                                                                            background: "rgb(199, 246, 252)"
                                                                                        }
                                                                            
                                                                                            }}
                                                                                className={dialog} 
                                                                                onClose={handleDialogClose} 
                                                                                
                                                                            >
                                                                                
                                                                                <DialogTitle className={dialogContent}>
                                                                                    
                                                                                    <div>
                                                                                    
                                                                                        <Feedback 
                                                                                            style = {{
                                                                                                color: '#e45252',
                                                                                                fontSize: 50,
                                                                                                paddingTop: '-1em',
                                                                                                display: 'flex',
                                                                                                flexWrap: 'wrap',
                                                                                                textStroke: '2px black'
                                                                                            }}
                                                                                        />
                                                                            
                                                                                    </div>
                                                                            
                                                                                    </DialogTitle>
                                                                                        
                                                                                        <DialogContent className={dialogContent} >
                                                                                            
                                                                                            <DialogContentText className={dialogText}>
                                                                                                
                                                                                                Deleting a recording cannot be undone.  Do you want to do this?

                                                                                            </DialogContentText>
                                                                                        
                                                                                        </DialogContent>
                                                                                
                                                                                    <DialogActions className={dialogContent}>
                                                        
                                                                                        <Button 
                                                                                            className={cancelButton} 
                                                                                            onClick={handleDialogClose} 
                                                                                            
                                                                                        >
                                                                                            <Cancel/>
                                                                                        
                                                                                        </Button>
                                                                    
                                                                                        <Button 
                                                                                            
                                                                                            
                                                                                            onClick={() => handleDeleteAudio(recording.id)} 
                                                                                            className={deleteButton}>
                                                                                            <Delete/>

                                                                                        </Button>
                                                                                    
                                                                                    </DialogActions>

                                                                            </Dialog>
                                                            
                                                        </Accordion>
                                                    )
                                                })}

                                            </div>
                                        
                                        </>
                                    )
                                })}

                    </Paper>
            
            </Drawer>


        </>

    )
}
    


export default RecordingsList;   
