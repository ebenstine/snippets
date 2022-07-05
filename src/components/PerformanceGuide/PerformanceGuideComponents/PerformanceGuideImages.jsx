import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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
import Feedback from '@material-ui/icons/Feedback';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card: {
        flexDirection: 'column',
        backgroundColor:  '#f0a1a1',
        width: 100 
    },
    
    card1: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        color: 'rgb(250, 250, 175)',
        marginLeft: '.5em',
        marginRight: '.5em',
        border: '1px solid #1d778d',
        width: 100
        
    },

    background: {
        paddingLeft: '1em'
    },

 

    cardContent: {
        display: 'flex',
        flexDirection : 'column', 
        alignItems: "center", 
        marginLeft: '1em',
        paddingTop: '3em',
        backgroundColor: '#77a9b6',
        color: '#1a313f'

    },

    text: {
        display: 'flex',
        //width: 295,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight: '7.4em',
        lineHeight: '1.8em',
        whiteSpace: 'pre-line',
        fontSize: 14.5,
        
        //paddingBottom: '2em',

    },

    paper: {
       
        background: 'linear-gradient(to top left,  #1d778d 0%, transparent 60%)',
        //paddingBottom: '6em',
        paddingTop: '6em',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        width: 400,
        height: 1000
        
    },
    imageCard: {
       
        paddingBottom: '5px',
        display: 'flex',
        justifyContent: 'center',
        color: '#1a313f',
        border: '1px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            background:'#f0a1a1',
            },
        
        
    },

    
    imageCard1: {
       
        paddingBottom: '5px',
        display: 'flex',
        justifyContent: 'center',
        color: '#1a313f',
        border: '1px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            background:'#afe4f1',
            },
        
        
    },

    imageCard2: {
       
        paddingBottom: '5px',
        display: 'flex',
        justifyContent: 'center',
        color: '#1a313f',
        border: '1px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            background:'#ffb171',
            },
        
        
    },

    imageCard3: {
       
        paddingBottom: '5px',
        display: 'flex',
        justifyContent: 'center',
        color: '#1a313f',
        border: '1px solid #1d778d',
        borderRadius: '.25em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
        '&:hover': {
            background:'#afe4f1',
            },
        
        
    },
    drawerHeader: {
        display: "flex",
        justifyContent: "center",
        paddingRight: "4.54em",
        color: "#233d4d",
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 22,
        
        
        justifyContent: "flex-end",
    },

    description: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 12,
        marginLeft: '1.5em',
        marginRight: '1.5em',
        borderBottom: '1.5px solid #1d778d',
        marginTop: 'auto',
        color: '#233d4d',
    },

    button: {
        
        fontSize: 16,
        color: '#2a4f64',
        backgroundColor:'#EBEBEB',
        boxShadow: '1px 1px 10px grey',
        border: '1.25px solid #c8ecf5'
        

    },

    view: {
        marginLeft:'4em',
        marginRight:'4em',
        display:'flex',
        justifyContent:'center',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
          background:'#94d9eb',
          },
        border: "1px solid #eb9148",
        borderRadius: "3px",
    },

    bye: {
        color:'#5294a5',
        marginTop: '.75em',
        marginLeft: '.75em',
        marginBottom: '.75em',
        border: '1px solid #1a313f',
        background: 'transparent',
        '&:hover': {
            background:'#fde76c',
            }

       
        //border: '1px solid #233d4d',
        //background: '#EBEBEB'
    },

    firstRecording: {
        color: "#233d4d",
    },

    cuteStar:{
        color:'#eb9148' 
    },

    dialogText: {
        border: '1.5px solid #e45252',
        borderRadius: '3px',
        color: '#233d4d',
        background: 'linear-gradient(to bottom right,  #ff8c8c 0%,#e7e7e7 100%)',
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: '.5em',
        paddingBottom: '.5em'
        
    },

    dialog: {
        
        marginLeft: '1em',
        marginRight: '1em'
    },

    deletePrompt: {
        marginLeft: '1.25em',
        marginRight: '1em',
        marginBottom: '.25em',
        marginTop: '3px',
        color: '#233d4d',
        
        
        
    },

    cancelButton: {

        color: '#233d4d',
        '&:hover': {
            color:'#e45252',
            },
        background: 'transparent',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    deleteButton: {

        color: '#233d4d',
        '&:hover': {
            color:'#77c568',
            },
        background: 'transparent',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    dialogText: {
        border: '1.5px solid #e45252',
        borderRadius: '3px',
        color: '#233d4d',
        background: 'linear-gradient(to bottom right,  #ff8c8c 0%,#e7e7e7 100%)',
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: '.5em',
        paddingBottom: '.5em'
        
    },

    instSpecs: {
        
        borderRadius: '3px',
        border:' 1.5px solid #3b95ac',
        background: '#82bdcc',
        '&:hover': {
            background:'#94d9eb'
        }
        
    },
    starting: {
        color: "#233d4d",
    },

    cuteStar:{
        color:'#eb9148' 
    },
    


    
    
    
}));


const PerformanceGuideImages = () => {
    const { 

            imageCard,
            imageCard1, 
            imageCard2,
            imageCard3,
            card1, 
            background, 
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


    const handleDialogOpen = () => {
        setIsDialogOpen(true)
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

            <Box 
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-start"
            >
                    
                {chordDiagrams.map((chordDiagram) => {

                                return (  
                            <>
                                <Box
                                    paddingTop={2}
                                    paddingRight={1}
                                                        
                                > 
                                    <div className={background}>
                                
                                        <Card
                                            
                                            raised={true}
                                            className={card1}
                                            
                                        >
                                        {songDetails.map((song) => {
                                            return (
                                            <>
                                            <CardContent

                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                item xs={1} key={chordDiagram.id}
                                        
                                            >

                                                <section className={
                                                    song.priority === '1' ? imageCard1 :
                                                        song.priority === '2' ? imageCard2 :
                                                            song.priority === '3' ? imageCard3 :
                                                                imageCard
                                                
                                                }>

                                                    <img 
                                                        src={chordDiagram.image_path} 
                                                        style={{height: 55, width: 55, marginLeft:'5px'}}
                                                    />
                                                </section>
                                                
                                            </CardContent>
                                            </>
                                            )
                                        })}
                                                    

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
                                                                        
                                                                        borderRadius:'2px'
                                                                    }}
                                                                />
                                                    
                                                            </div>
                                                    
                                                            </DialogTitle>
                                                                
                                                                <DialogContent className={dialogContent} >
                                                                    
                                                                    <DialogContentText className={dialogText}>
                                                                        
                                                                        Deleting an image cannot be undone.  Do you want to do this?

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
                                                                    onClick={() => handleDeleteDiagram(chordDiagram.id)} 
                                                                    className={deleteButton}>
                                                                    <Delete/>

                                                                </Button>
                                                            
                                                            </DialogActions>

                                                    </Dialog>
                                        
                                        </Card>

                                    </div>
                                </Box>
                                </>
                                )
                            })} 
                                
                                <br></br>

            </Box>
        </>
    )

}   

export default PerformanceGuideImages;