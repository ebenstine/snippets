import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, FormControl } from '@material-ui/core';
import { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Archive from '@material-ui/icons/Archive';
import Cancel from '@material-ui/icons/Cancel';
import Feedback from '@material-ui/icons/Feedback';
import QueueMusic from '@material-ui/icons/QueueMusic';


import useStyles from './InactiveSongDetailsStyles';
import SongDetailsMenu from '../SongDetails/SongDetailsComponents/SongDetailsMenu';
import Delete from '@material-ui/icons/Delete';




function InactiveArchiveStatus(){
    
    const { 
            
            title, 
            root, 
            card, 
            paper, 
            cardText, 
            cardContent,  
            menuDots, 
            deletePrompt,
            button, 
            cancelButton,
            dialog,
            dialogText,
            dialogContent, 
            deleteButton,
            activateButton

        } = useStyles();

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    
    console.log(params);

 
    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, []);
   
    const songDetails = useSelector((store) => store.songDetails)

    let song = {
        is_active: songDetails.is_active = true
    
      };
    
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
        let updatedStatus = {...status, id:params.id}
        dispatch ({
            type: 'REVISE_SONG',
            payload: updatedStatus
                     
        })
    history.push(`/songsList`);
    
    }
  
      
      const handleCancel = () => {
        setOpen(false);
        handleClose();
      }
    const handleDelete = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'DELETE_SONG',
            payload: songId
        })
        history.push('/songsList')
    }

    

    
    

    
return (
        

    <>
            

                                
                                <div>
                                    
          

                                    <Button 
                                        
                                        className={activateButton} 
                                        variant="contained" 
                                        type="submit"
                                        value={song.is_active = true}
                                        onClick={handleStatus}
                                            
                                    >
                                        <QueueMusic/>
                                    
                                    </Button>

                                    <Button 
                                        
                                        className={deletePrompt} 
                                        variant="contained" 
                                        onClick={handleClickOpen}
                                    >
                                        <Delete/>

                                    </Button>

                                        <Dialog 
                                
                                            open={open} 
                                            PaperProps={{
                                                style: { 
                                                    
                                                    border: "1px solid #e45252",
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
                                            
                                                        Deleting the song is an irreversible action.  Do you want to do this?

                                                    </DialogContentText>
                                    
                                                </DialogContent>
                               
                                                <DialogActions className={dialogContent}>    
                                        
                                                    <div>

                                                        <Button 
                                        
                                                            className={cancelButton} 
                                                            onClick={handleCancel} 
                                                            variant="contained"
                                    
                                                        >
                                        
                                                            <Cancel/>
                                    
                                                        </Button>
                    
                                                        <Button 
                                        
                                                            className={deleteButton}
                                                            variant="contained"
                                                            onClick={() => handleDelete(song.id)}
                                        
                                                        >
                                        
                                                            <Delete/>

                                                        </Button>
                                                    
                                                    </div>

                                                </DialogActions>

                                        </Dialog>
                                        
                                </div>
                                    
        </>                    
    )
}
        
export default InactiveArchiveStatus; 