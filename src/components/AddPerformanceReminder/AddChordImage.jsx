//import into performanceGuide
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl } from '@material-ui/core';
import { TextField } from '@mui/material'
import { connect, useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import ChordImagesUploader from './ChordImagesUploader';
import useStyles from './AddChordImageStyles';
import { Alert } from '@mui/material';
import Cancel from '@material-ui/icons/Cancel';
import { CheckCircle } from '@mui/icons-material';
import Backup from '@material-ui/icons/Backup';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';




const AddChordImage = ({ song, handleMenuClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dialog, root, actionDiv, dialogTitle, dialogButtons, upload, descriptionText  } = useStyles();
  const params = useParams();
  const songDetails = useSelector((store) => store.songDetails)
  const [fileUrl, setFileUrl] = useState ('no file was dropped');
  const [open, setOpen] = useState(false);
  const [newImage, setNewImage] = useState({});
  const [openAlert, setOpenAlert] = useState(false);


  

  
  
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
  const enterNewImage = (key) => (event) => {
    setNewImage({ ...newImage, id:params.id, [key]: event.target.value });
  };

  if (newImage.image_path === ''){
    
    alert('You must upload an image file!')
  
  } 

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 

      type: 'POST_DIAGRAM', 
      payload: newImage

    });
   handleAlert();
  }

  const handleAlertClose = () => {
    setOpenAlert(false);
    setOpen(false)
  }
  
  const handleAlert = () => {
    setOpenAlert(true);
  }


  console.log(newImage);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewImage({...newImage, id:params.id, image_path: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}

  return (

    <>

    

    
    
      <div>
        
        <MenuItem 
          
          onClick={handleClickOpen} 
          className={upload}>
          <AddPhotoAlternateIcon/>
          &nbsp;Upload Visual Aid
          
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
          
                <DialogTitle className={dialogTitle} >
                    Add a Chord Image
                </DialogTitle>
          
                  <DialogContent className={dialog}>
          
                      <ChordImagesUploader
                  
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
                  Cancel &nbsp;
                  <Cancel/>

                </Button>
            
                <Button 
                  
                  onClick={handleSave} 
                  variant="contained" 
                  size="small" 
                  className={dialogButtons}
                >
                  Save &nbsp;
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
                  Success! Images Viewable in Performance Guide
                  </Alert>

                </Dialog>

              </DialogActions>

          </Dialog>
    
      </div>
        
    
    </>
  );
}

export default AddChordImage;