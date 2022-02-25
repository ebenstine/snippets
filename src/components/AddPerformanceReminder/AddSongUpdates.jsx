//import into performanceGuide
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './AddSongUpdatesStyles'
import Cancel from '@material-ui/icons/Cancel';
import { Lightbulb, Piano, DescriptionOutlined } from '@mui/icons-material';
import { CheckCircle } from '@material-ui/icons';
import { NoteAddOutlined } from '@material-ui/icons';






const AddSongUpdates = () => {
  
  const dispatch = useDispatch();

  const { dialog, 
          root, 
          textField, 
          dialogTitle, 
          buttons, 
          upload, 
          actions 
        } 
          
      = useStyles();

  const params = useParams();
  const songDetails = useSelector((store) => store.songDetails)
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  let song = {
    
    instrument_specs: songDetails.instrument_specs,

  };

  const [reviseDetails, setReviseDetails] = useState(song);


  const handleChange = (event) => {
    setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let revisedSong = reviseDetails;
    revisedSong = { ...revisedSong, id: params.id };
    console.log('new song revisions made in', revisedSong);
    dispatch({
      type: 'REVISE_SONG',
      payload: revisedSong
    });
  }

  const handleClickOpen = () => {
    if (song === null){
      setOpen(false)
    } else
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    //handleMenuClose();
    
  }

  const handleAlertClose = () => {
    setOpenAlert(false);
    setOpen(false)
  }
  
  const handleAlert = () => {
    setOpenAlert(true);
  }

  
  
  
  
    return (

      <>
        {songDetails.map((song) => {
          return(
            <>
              {song.instrument_specs ?

                null 

              :

        
                <MenuItem 
                  
                  onClick={handleClickOpen} 
                  className={upload}>
                  <NoteAddOutlined/>
                  &nbsp;Create Text Reminder
                  
                </MenuItem>
              }

                <Dialog 
                    
                    PaperProps={{
                    
                      style: { 
                        
                                border: "1px solid #2a4f64",
                                background: "rgb(199, 246, 252)",
                                margin:'auto',
                                width: 350
                              
                              }

                    }}
                    open={open} 
                    onClose={handleCancel}
                  
                >
                
                      <div className={root}>
                  
                        <DialogTitle className={dialogTitle} >
                            Add Specifications and Notes
                        </DialogTitle>

                        
                          <DialogContent className={dialog}>
                  
                              <FormControl>
                                <form onSubmit={handleSubmit} autoComplete="off" >
                                    {song.primary_instrument === 'guitar' ?
                                    
                                        <TextField 
                                            
                                            label= 
                                                {
                                                    <img 
                                                        style={{width:22, height:22}} 
                                                        src='finalHeadstock.png'
                                                    >
                                                    </img>
                                                }
                                                    
                                            name="instrument_specs"
                                            placeholder="Enter Guitar Tuning"
                                            
                                            value={reviseDetails.instrument_specs}
                                            margin="dense" 
                                            multiline className={textField} 
                                            onChange={handleChange}
                                            
                                            />

                                    :

                                    song.primary_instrument === 'keyboard' ?

                                        <TextField 
                                                
                                          label= {<Piano style={{color: '#1d778d'}}/>}
                                                  
                                          name="instrument_specs"
                                          placeholder="Enter Keyboard Model"
                                          
                                          value={reviseDetails.instrument_specs}
                                          margin="dense" 
                                          multiline className={textField} 
                                          onChange={handleChange}
                                                
                                        />
                                    :

                                        <TextField 
                                                            
                                          label={<Lightbulb style={{color: '#1d778d'}}/>}
                                                  
                                          name="instrument_specs"
                                          placeholder="Enter Performance Medium"
                                          
                                          value={reviseDetails.instrument_specs}
                                          margin="dense" 
                                          multiline className={textField} 
                                          onChange={handleChange}
                                                
                                        />
                                    }

                                        <TextField 

                                          label={<DescriptionOutlined style={{color: '#1d778d'}}/>}
                                          placeholder="Enter Performance Notes" 
                                          name="performance_notes"
                                          
                                          value={reviseDetails.performance_notes}
                                          margin="dense" 
                                          multiline className={textField} 
                                          onChange={handleChange}
                                        
                                        />
                                    
                                          <div className={actions}> 
                                    
                                              <Button 
                                                className={buttons} 
                                                onClick={handleCancel} 
                                                variant="outlined">
                                                <Cancel/>
                                              </Button>
                                              
                                              <Button 
                                                className={buttons} 
                                                onClick={handleAlert}
                                                variant="outlined" 
                                                type="submit">
                                                <CheckCircle/>
                                                
                                              </Button>
                                              
                                            <Dialog
                                              open={openAlert}
                                              
                                            >
                                              <Alert 
                                                severity="success" 
                                                variant="outlined"
                                                color="info"
                                                
                                                onClose={handleAlertClose}
                                                
                                                >
                                              Success! Updates viewable in your performance guide.
                                              </Alert>

                                            </Dialog>
                                          
                                          
                                            
                                    
                                          </div>
                                </form>
                              </FormControl>
                          
                          </DialogContent>
                      </div>    
                  </Dialog>
            </>
          );
        })}
      </>
    )      
}

export default AddSongUpdates;