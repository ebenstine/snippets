import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, FormControl } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import RecordingsUploader from './RecordingsUploader'
import useStyles from './AddRecordingStyles'
import Cancel from '@material-ui/icons/Cancel';
import Backup from '@material-ui/icons/Backup';



const AddRecording = ({ song, handleMenuClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dialog, root, actionDiv, dialogTitle, dialogButtons, upload, descriptionText  } = useStyles();
  const params = useParams();
  const songDetails = useSelector((store) => store.songDetails)
  const [fileUrl, setFileUrl] = useState ('no file was dropped');
  const [open, setOpen] = useState(false);
  const [newRecording, setNewRecording] = useState({});

  const handleClickOpen = () => {
    if (song === null){
      setOpen(false)
    } else
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
    //handleMenuClose();
    setFileUrl('');
  }
  const enterNewRecording = (key) => (event) => {
    setNewRecording({ ...newRecording, id:params.id, [key]: event.target.value });
  };

  if (newRecording.description === '' || newRecording.src === 'null') {
    
    alert('You must enter a description and upload an audio file!')
  
  } 

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 

      type: 'POST_NEW_RECORDING', 
      payload: newRecording

    });
   setOpen(false);
  };

  console.log(newRecording);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewRecording({...newRecording, id:params.id, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}

  return (
    
    
    <div>
      
      <MenuItem 
        
        onClick={handleClickOpen} 
        className={upload}>
        <Backup/>
        &nbsp;Upload New
        
      </MenuItem>
      
        <Dialog 
          
          PaperProps={{
          
            style: { border: "1px solid #2a4f64" }

          }}
          open={open} 
          onClose={handleCancel}
        
        >
      
          <FormControl>
        
            <form className={root}>
        
              <DialogTitle className={dialogTitle} >Add a Recording </DialogTitle>
        
                <DialogContent className={dialog}>
        
                  <TextField
                  
                    label="description"
                    onChange={enterNewRecording('description')}
                    value={newRecording.description}
                    multiline className={descriptionText}
              
                  />
        
                    <RecordingsUploader 
                
                      uploadComplete={uploadComplete}

                    />

                </DialogContent>

            </form>

          </FormControl>
        
        
            <DialogActions className={actionDiv}>
          
              <Button 
                
                onClick={handleCancel} 
                variant="contained" 
                size="small" 
                className={dialogButtons}
              >
            
                <Cancel/>

              </Button>
          
              <Button 
                
                onClick={handleSave} 
                variant="contained" 
                size="small" 
                className={dialogButtons}
              >
            
                <Backup/>

              </Button>

            </DialogActions>

        </Dialog>
   
    </div>
    
  );
}

export default connect() (AddRecording);