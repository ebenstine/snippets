//Similar to the function of songDetails

//will show the editable contents of instrumentSpec performanceNotes
//and, the images table that contains all chord diagrams for the song, although this code is not refactored
//until I figure out how and if it makes sense to do it
//the chord diagrams don't an edit, but a post and delete
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SupportIcon from '@mui/icons-material/Support';
import PerformanceGuideInstrumentSpecs from './PerformanceGuideComponents/PerformanceGuideInstrumentSpecs'
import PerformanceGuidePerformanceNotes from './PerformanceGuideComponents/PerformanceGuidePerformanceNotes';
import PerformanceGuideImages from './PerformanceGuideComponents/PerformanceGuideImages';
import { 
    Card,
    CardContent, 
    Box,
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
import Delete from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import Feedback from '@material-ui/icons/Feedback';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useStyles from './PerformanceGuideStyles';
import { Cancel } from '@material-ui/icons';
import { Lightbulb } from '@mui/icons-material';
import { Piano } from '@mui/icons-material';

const PerformanceGuide = () => {
    const { 
            paper, 
            imageCard1, 
            card1, 
            drawer, 
            drawerHeader, 
            background, 
            view, 
            deletePrompt,
            dialog,
            dialogContent,
            dialogText,
            cancelButton,
            deleteButton,
        
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const chordDiagrams = useSelector((store) => store.chordDiagrams);
    const songDetails = useSelector ((store) => store.songDetails);
    const params = useParams();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    //going to need an editing state for conditional render like in detailsPage

    
   
    
    const handleClickOpen = () => {
        if (chordDiagrams === null) {
            setIsDrawerOpen(false)
        } else 
        setIsDrawerOpen(true);
        
        dispatch({
            type: 'FETCH_DIAGRAMS',
            payload: params.id
           
        });
        
    };

    const handleCancel = () => {
        setIsDrawerOpen(false);
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
            {songDetails.map((song) => {
                return (
                    <>
                    
                        {song.instrument_specs ?
                            <MenuItem 
                                
                                onClick={handleClickOpen}
                                className={view}
                            >
                                <SupportIcon style={{color:'#233d4d'}}/>
                                
                                &nbsp;Support
                            
                            </MenuItem>
                        :
                            null
                        }
                    </>
                )
            })}

         
            <Drawer
            
                className={drawer}
                variant="temporary"
                anchor="right"
                open={isDrawerOpen}
                onClose={handleCancel}
        
            >

                <Paper 
                        
                    className= {paper} 
                    elevation={10}
                >
                    {songDetails.map((song) => {
                        
                        return (
                        
                            <>
                                <div 
                                    style=
                                        {{
                                            display:'flex', 
                                            justifyContent: 'center', 
                                            paddingBottom: '2em'
                                        }}
                                >
                        
                                    {song.primary_instrument === 'guitar' ?
                                    
                                        <img 
                                        
                                            style=
                                                {{
                                                    width:50, 
                                                    height:50, 
                                                    display:'flex', 
                                                    justifyContent: 'center'
                                                }} 
                                        
                                            src='finalHeadstock.png'
                                        >
                                    
                                        </img>

                                    :
                                    
                                    song.primary_instrument === 'keyboard' ?
                                    
                                        <Piano
                                        
                                            style=
                                                {{
                                                    width:50, 
                                                    height:50, 
                                                    display:'flex', 
                                                    color: '#1d778d', 
                                                    justifyContent: 'center'
                                                }} 
                                        
                                        >
                                        </Piano>

                                    :
                                    
                                    song.primary_instrument === 'other' ?

                                        <Lightbulb
                                        
                                            style=
                                                {{
                                                    width:50, 
                                                    height:50, 
                                                    display:'flex', 
                                                    color: '#1d778d', 
                                                    justifyContent: 'center'
                                                }} 
                                        
                                        >
                                        </Lightbulb>
                                    :

                                    null

                                    }
                                
                                </div>
                        
                            </>
                        )
                    })}
                        <div className={drawerHeader}>
                            
                            <IconButton 
                            
                                onClick={handleCancel}
                                style={{
                                    
                                    color:"#1d778d"
                                
                                }}
                            
                            >
                                
                                <ChevronRightIcon/>
                                    
                            </IconButton>
                            
                                <Typography 
                        
                                    style={{
                                        //probably have the 'all chord images' heading 
                                        //read "Performance Guide"
                                        borderBottom: "1.5px solid #1d778d",
                                        fontSize: 16,
                                        color: "#233d4d"
                                    
                                    }}
                                    variant="overline" 

                                > 
                                
                                Performance Guide

                                </Typography>
      
                        </div>
                            
                    <br></br>
                    {/*refactored components*/}

                    <PerformanceGuideInstrumentSpecs/> 

                        <PerformanceGuidePerformanceNotes/>
      
                            <PerformanceGuideImages/>
                    <br></br>
                    <br></br>
                    
                </Paper>
            
            </Drawer>


        </>

    )
}
            

export default PerformanceGuide;