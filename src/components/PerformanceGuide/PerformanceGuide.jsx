//Similar to the function of songDetails

//will show the editable contents of instrumentSpec performanceNotes
//and, the images table that contains all chord diagrams for the song, from songChordDiagrams
//which doesn't need an edit, but a post and delete
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
import { InfoOutlined } from '@material-ui/icons'
import AudioPlayer from "react-modular-audio-player";
import IconButton from "@material-ui/core/IconButton";
import Feedback from '@material-ui/icons/Feedback';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from './PerformanceGuideStyles';
import { Cancel } from '@material-ui/icons';

const PerformanceGuide = () => {
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
            cuteStar,
            deletePrompt,
            dialog,
            dialogContent,
            dialogText,
            cancelButton,
            deleteButton
        
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const chordDiagrams = useSelector((store) => store.chordDiagrams);
    const songs = useSelector ((store) => store.songs)
    const params = useParams();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showHeading, setShowHeading] = useState(false);
    const [showExtraText, setShowExtraText] = useState()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    
   
    
    const handleClickOpen = () => {
        if (chordDiagrams === null) {
            setIsDrawerOpen(false)
        } else 
        setIsDrawerOpen(true);
        
        dispatch({
            type: 'FETCH_DIAGRAMS',
            payload: params.id
           
        });

        if (chordDiagrams.length > 1) {
            setShowHeading(true)
        } else
            setShowHeading(false);
        
    };

    const handleDialogOpen = () => {
        setIsDialogOpen(true)
    }

    
    

    const handleCancel = () => {
        setIsDrawerOpen(false);
    }

    const handleDialogClose = () => {
        setIsDialogOpen(false)
    }

    const handleDeleteDiagram = (diagramId) => {
        
        console.log(diagramId);
        dispatch({
            type: 'DELETE_DIAGRAM',
            payload: diagramId
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
                <InfoOutlined/>
                
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
                                        
                                            All Chord Images
                                        
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
                            
                        {chordDiagrams.map((chordDiagram) => {
                                
                            
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
                                                            
                                                            
                                                        />}

                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    item xs={1} key={chordDiagram.id}
                                            
                                                >

                                                    <section className={player}>

                                                    <img src={chordDiagram.image_path}/>
                                                     </section>
                                                    
                                                </AccordionSummary>
                                            
                                                            <div>
                                                            
                                                                {showExtraText ?

                                                                    <Typography 
                                                                    
                                                                        variant="h6" 
                                                                        className={description}>
                                                                        This is the primary recording for &nbsp;
                                                                        
                                                                        
                                                                        
                                                                    </Typography>
                                                                :

                                                                    <Typography 
                                                                    
                                                                        variant="h6" 
                                                                        className={description}>
                                                                        
                                                                        
                                                                        
                                                                    </Typography>
                                                                
                                                                }
                                                        
                                                            </div>

                                                                <Button 
                                                                    className={deletePrompt}
                                                                    variant="contained"
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
                                                                                variant="contained"
                                                                            >
                                                                                <Cancel/>
                                                                            
                                                                            </Button>
                                                        
                                                                            <Button 
                                                                                
                                                                                variant="contained" 
                                                                                onClick={() => handleDeleteAudio(recording.id)} 
                                                                                className={deleteButton}>
                                                                                <Delete/>

                                                                            </Button>
                                                                        
                                                                        </DialogActions>

                                                                    </Dialog>
                                                
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
            

export default PerformanceGuide;