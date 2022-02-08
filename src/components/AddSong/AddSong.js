import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, MenuItem, TextField, Button, Typography, DialogTitle, Dialog} from '@material-ui/core';
import { Select, FormControl, InputLabel } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';
import Backup from '@material-ui/icons/Backup';
import Cancel from '@material-ui/icons/Cancel';



const AddSong = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { root, 
          inputs, 
          paper, 
          textField, 
          cardContent, 
          title, 
          dialog,
          statusBlank,
          statusActive,
          statusInactive,
          setActive,
          setInactive,
          selectTitle,
          selectStatus,
          blankPriority,
          priorityUncertain, 
          priority1,
          priority2,
          priority3,
          setPriorityUncertain,
          setPriority1,
          setPriority2,
          setPriority3,
          primaryInstrument,
          primaryInstrumentBlank,
          selectInstrument,
          setInstrument
          
        
        } 
          
          = useStyles();

  const [url , setUrl] = useState ('no file was dropped');
 
  const [errorState, setErrorState] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [newSong, setNewSong] = useState({});
  
  

  

  const enterNewSong = (key) => (event) => {
    setNewSong({ ...newSong, [key]: event.target.value });
  };

  if ((newSong.title === '') || (newSong.preview_audio === '')) {
    
    alert('Please enter a title, and upload a file')
  
  } 

 
  
 
  const handleSave = (event) => {
    
    event.preventDefault();
    dispatch({ 
      
      type: 'POST_NEW_SONG', 
      payload: newSong 
      
    });
    newSong.is_active === true ?
    history.push('/songsList')

    : 

    history.push('/inactiveArchive')
   };
  
  console.log(newSong);
  
  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewSong({...newSong, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
  }


   


  return (
    <div>
      
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        
        <FormControl >
          
          <form className={root} onSubmit={handleSave} noValidate autoComplete="off" >
            
            <div className={cardContent}>
            
              <Typography 
                variant="h5" 
                
                className={title}>
                Add a New Song
              </Typography>
                
                <TextField
                  label="Title"
                  onChange={enterNewSong('title')}
                  value={newSong.title}
                  error={errorState}
                  multiline className={textField}
                />
          
                <TextField
                  label="Instrument Notes"
                  onChange={enterNewSong('instrument_notes')}
                  value={newSong.instrument_notes}
                  multiline className={textField}

                />
         
                <TextField
                  label="Performance Notes"
                  onChange={enterNewSong('performance_notes')}
                  value={newSong.performance_notes}
                  multiline className={textField}

                />

                <TextField
                  label="Lyrics"
                  onChange={enterNewSong('lyrics')}
                  value={newSong.lyrics}
                  multiline className={textField}
                />
              
                <br></br>
              
                <div>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
          
                    <InputLabel 
                      id="demo-controlled-open-select-label">
                      Status
                    </InputLabel>
  
                      <Select
    
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        label="is_active"
                        name="is_active"
                        onChange={enterNewSong('is_active')}
                        className=
                          {newSong.is_active === true ? 
                            statusActive :
                              newSong.is_active === false ?
                                statusInactive :
                                  statusBlank
                          }
                        value={newSong.is_active}
    
                      >
                        
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectStatus}>
                          &nbsp;&nbsp;Working Status&nbsp;&nbsp;
                        </DialogTitle>  
        
                          <MenuItem 
                            value={true} 
                            className={setActive}>
                            Active
                          </MenuItem>
        
                          <MenuItem 
                            value={false} 
                            className={setInactive}>
                            Inactive
                          </MenuItem>
                          
                        </Select> 

                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
          
                    <InputLabel 
                      id="demo-controlled-open-select-label">
                      Instrument
                    </InputLabel>
  
                      <Select
    
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        label="primary_instrument"
                        name="primary_instrument"
                        onChange={enterNewSong('primary_instrument')}
                        className=
                          {newSong.primary_instrument ?
                            primaryInstrument :
                              primaryInstrumentBlank 
                            

                          }
                        value={newSong.primary_instrument}
    
                      >
                        
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectInstrument}>
                          &nbsp;&nbsp;Primary Instrument&nbsp;&nbsp;
                        </DialogTitle>  
        
                          <MenuItem 
                            value={'guitar'} 
                            className={setInstrument}>
                            Guitar
                          </MenuItem>
        
                          <MenuItem 
                            value={'keyboard'} 
                            className={setInstrument}>
                            Keyboard
                          </MenuItem>

                          <MenuItem 
                            value={'laptop'} 
                            className={setInstrument}>
                            Laptop
                          </MenuItem>

                          <MenuItem 
                            value={'other'} 
                            className={setInstrument}>
                            Other
                          </MenuItem>
                          
                        </Select> 

                  </FormControl>
                </div>
                
              
              
                
          
                  
                <div>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                  
                    <InputLabel 
                      id="demo-controlled-open-select-label">
                      Priority
                    </InputLabel>
            
                      <Select
              
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        label="priority"
                        name="priority"
                        onChange={enterNewSong('priority')}
                        className=
                          {newSong.priority === '1' ? 
                                  
                            priority1 :

                              newSong.priority ===  '2' ?
                                 
                                priority2 :

                                  newSong.priority === '3' ?

                                    priority3 :

                                      newSong.priority === 'Uncertain' ?

                                        priorityUncertain :

                                          blankPriority
                                
                          }
                                value={newSong.priority}
              
                      >
                
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectTitle} >
                          &nbsp;&nbsp;Completion Priority&nbsp;&nbsp;
                        </DialogTitle>
                        
                          <MenuItem 
                            value={'1'} 
                            className={setPriority1}>
                            Group One
                          </MenuItem>
                  
                          <MenuItem 
                            value={'2'} 
                            className={setPriority2}>
                            Group Two
                          </MenuItem>
                  
                          <MenuItem 
                            value={'3'} 
                            className={setPriority3}>
                            Group Three
                          </MenuItem>
                  
                          <MenuItem 
                            value={'Uncertain'} 
                            className={setPriorityUncertain}>
                            Uncertain
                            </MenuItem>
          
                      </Select> 
        
                  </FormControl>
          
                </div>
          

          
                  <Uploader 
                    elevated={10}  
                    uploadComplete={uploadComplete}
                    error={errorState}
            
                  />
         
          
                  <FormControl>
                
                    <div>
            
                      <Button 
                        variant="contained" 
                        onClick={toUserHome} 
                        className={inputs}>
                        <Cancel/>
                      </Button>
            
                      <Button 
                        variant="contained" 
                        type="submit" 
                        /*onClick={toUserHome}*/ 
                        className={inputs}>
                        <Backup/>
                      </Button>
                    
                    </div>
          
                  </FormControl>
          
            </div>

          </form>

        </FormControl>

      </Paper>

    </div>

  );

}


export default connect() (AddSong);