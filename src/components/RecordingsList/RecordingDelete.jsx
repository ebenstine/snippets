//component not in use
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, FormControl } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Cancel from '@material-ui/icons/Cancel';
import Feedback from '@material-ui/icons/Feedback';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({


    activateButton: {
        marginLeft: '10em',
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

    deletePrompt: {
        marginLeft: '1.5em',
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

    deleteButton: {
        
        color: '#233d4d',
        background: '#fff099',
        border: '1px solid #3b95ac',
        marginLeft: '1em',
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



function InactiveArchiveStatus(){
    
    const { 
            
            
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



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    
    const handleCancel = () => {
        setOpen(false);
        
      }
    const handleDelete = () => {
        
        dispatch ({
            type: 'DELETE_SONG',
            payload: params.id
        })
     history.push(`/inactiveArchive`)
    }

    

    
    

    
return (
        

    <>
            

                                
                                <div>
                                    
          

                                    <Button 
                                        
                                        className={activateButton} 
                                        variant="contained" 
                                        type="submit"
                                        
                                        onClick={handleStatus}
                                            
                                    >
                                        <Cancel/>
                                    
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
                                                            onClick={() => handleDelete(recording.id)}
                                        
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