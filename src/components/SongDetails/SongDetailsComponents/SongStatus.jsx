import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { Archive, Feedback, Cancel, CheckCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({


    cancelButton: {

        color: '#233d4d',
        '&:hover': {
            color:'#e45252',
            },
        background: '#fff099',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    archiveButton: {

        color: '#233d4d',
        '&:hover': {
            color:'#77c568',
            },
        background: '#fff099',
        border: '1px solid #3b95ac',
        alignItems: 'center',
        '&:hover': {
            background:'#fde76c',
            },
        
    },

    dialog: {
        
        marginLeft: '1em',
        marginRight: '1em'
    },

    dialogContent: {
        backgroundColor: 'rgb(230, 252, 255)',
        display:'flex',
        flexWrap: 'wrap',
        color: '#233d4d',
        
        
        
    },

    button: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        background: '#fff099',
        border: '1px solid #3b95ac',
        paddingLeft: '1em',
        paddingRight: '1em',
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
        
    }

}));

function SongStatus() {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();



    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, []);
    const songDetails = useSelector((store) => store.songDetails)
    const songs = useSelector((store) => store.songs)
    const { button, dialog, dialogContent, dialogText, cancelButton, archiveButton } = useStyles();

    let song = {
        is_active: songDetails.is_active = false
     }
     
    const [status, setStatus] = useState(song);
     
    const [open, setOpen] = useState(false);
 
    const handleClickOpen = () => {
         setOpen(true);
       };
     
    const handleClose = () => {
        setOpen(false);
    };
 
 
       
 
    const handleStatus = (event) => {
         event.preventDefault();
         let updatedStatus = {...status, id: params.id}
         dispatch ({
             type: 'REVISE_SONG',
             payload: updatedStatus
                      
         })
     history.push(`/InactiveArchive`);
     
    }
 
     


return (

    <>
        {songDetails.map((song) => {
                        
                return (
        

                        <div>
                    
                    
                    
                        <Button 
                            className={button} 
                            variant="contained" 
                            onClick={handleClickOpen}
                        >
                            <img src="archiveSong.png" style={{width:26, height:26}} ></img>
                            
                        </Button>
                        
                            <Dialog 
                                open={open} 
                                PaperProps={{
                                    style: 
                                        { border: "1px solid #e45252",
                                             
                                             background: "rgb(199, 246, 252)"
                                        }
                            
                                            }}
                                className={dialog} 
                                onClose={handleClose} 
                                
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
                                            
                                            Moving the song to the inactive archive will suspend your ability to 
                                            add new ideas or changes.  Do you want to do this?

                                        </DialogContentText>
                                    
                                    </DialogContent>
                               
                                <DialogActions className={dialogContent}>
                                    
                                    <Button 
                                        className={cancelButton} 
                                        onClick={handleClose} 
                                        variant="contained"
                                    >
                                        <Cancel/>
                                    
                                    </Button>
                                    
                                    <Button 
                                        className={archiveButton} 
                                        onClick={handleStatus} 
                                        variant="contained"
                                        type="submit"
                                        value={song.is_active = false}
                                    >
                                    
                                        <CheckCircle/>
                                        
                                    </Button>

                                </DialogActions>

                            </Dialog>

                        </div>
                )
            })}
        </>
    )    
}

export default SongStatus;   