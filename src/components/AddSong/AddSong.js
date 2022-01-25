import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, MenuItem, TextField, Button, Typography, DialogTitle, FormHelperText} from '@material-ui/core';
import { Select, FormControl, InputLabel } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';
import Backup from '@material-ui/icons/Backup';
import Cancel from '@material-ui/icons/Cancel';
import PriorityGroupOne from './PriorityGroupOne';
import { Alert } from '@material-ui/lab';
import { Add } from '@material-ui/icons';


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
          blankPriority,
          priorityUncertain, 
          priority1,
          priority2,
          priority3,
          setPriorityUncertain,
          setPriority1,
          setPriority2,
          setPriority3,
          
        
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

    history.push('/archive')
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
                component="h5" 
                className={title}>
                New Song Details
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
              
              {newSong.is_active === true ? 

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
                        className={statusActive}
                        value={newSong.is_active}
    
                      >
      
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectTitle}>
                          &nbsp;&nbsp;Set Working Status&nbsp;&nbsp;
                        </DialogTitle>  
        
                          <MenuItem 
                            value={true} 
                            className={setActive}>
                            &nbsp;&nbsp;Active
                          </MenuItem>
        
                          <MenuItem 
                            value={false} 
                            className={setInactive}>
                            Inactive
                          </MenuItem>
      
                        </Select> 

                  </FormControl>
              
                </div>
              
              :

              newSong.is_active === false ?

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
                      className={statusInactive}
                      value={newSong.is_active}

                    >
  
                      <DialogTitle 
                        defaultValue={'  '}
                        className={selectTitle}>
                        &nbsp;&nbsp;Set Working Status&nbsp;&nbsp;
                      </DialogTitle>  
    
                        <MenuItem 
                          value={true} 
                          className={setActive}>
                          &nbsp;&nbsp;Active
                        </MenuItem>
    
                        <MenuItem 
                          value={false} 
                          className={setInactive}>
                          Inactive
                        </MenuItem>
  
                    </Select> 

                </FormControl>
          
              </div>

            :

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
                      className={statusBlank}
                      value={newSong.is_active}

                    >

                      <DialogTitle 
                        defaultValue={'  '}
                        className={selectTitle}>
                        &nbsp;&nbsp;Set Working Status&nbsp;&nbsp;
                      </DialogTitle>  

                        <MenuItem 
                          value={true} 
                          className={setActive}>
                          &nbsp;&nbsp;Active
                        </MenuItem>

                        <MenuItem 
                          value={false} 
                          className={setInactive}>
                          Inactive
                        </MenuItem>

                    </Select> 

                </FormControl>
      
              </div>

            }

                
              {newSong.priority ==='1' ?

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
                        className={priority1}
                        value={newSong.priority}
              
                      >
                
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectTitle} >
                          &nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;
                        </DialogTitle>
                        
                          <MenuItem 
                            value={'1'} 
                            className={setPriority1}>
                            &nbsp;&nbsp;Group One&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'2'} 
                            className={setPriority2}>
                            &nbsp;&nbsp;Group Two&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'3'} 
                            className={setPriority3}>
                            &nbsp;Group Three
                          </MenuItem>
                  
                          <MenuItem 
                            value={'Uncertain'} 
                            className={setPriorityUncertain}>
                            &nbsp;&nbsp;&nbsp;Uncertain
                            </MenuItem>
          
                      </Select> 
        
                  </FormControl>
          
                </div>
          
              :
          
              newSong.priority ==='2' ?

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
                        className={priority2}
                        value={newSong.priority}
              
                      >
                
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectTitle} >
                          &nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;
                        </DialogTitle>
                        
                          <MenuItem 
                            value={'1'} 
                            className={setPriority1}>
                            &nbsp;&nbsp;Group One&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'2'} 
                            className={setPriority2}>
                            &nbsp;&nbsp;Group Two&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'3'} 
                            className={setPriority3}>
                            &nbsp;Group Three
                          </MenuItem>
                  
                          <MenuItem 
                            value={'Uncertain'} 
                            className={setPriorityUncertain}>
                            &nbsp;&nbsp;&nbsp;Uncertain
                            </MenuItem>
          
                      </Select> 
        
                  </FormControl>

                </div>

              :
    
              newSong.priority ==='3' ?
          
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
                        className={priority3}
                        value={newSong.priority}
              
                      >
                
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectTitle} >
                          &nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;
                        </DialogTitle>
                        
                          <MenuItem 
                            value={'1'} 
                            className={setPriority1}>
                            &nbsp;&nbsp;Group One&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'2'} 
                            className={setPriority2}>
                            &nbsp;&nbsp;Group Two&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'3'} 
                            className={setPriority3}>
                            &nbsp;Group Three
                          </MenuItem>
                  
                          <MenuItem 
                            value={'Uncertain'} 
                            className={setPriorityUncertain}>
                            &nbsp;&nbsp;&nbsp;Uncertain
                            </MenuItem>
          
                      </Select> 
        
                  </FormControl>

                </div>
      
              :

              newSong.priority === 'Uncertain' ?
      
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
                        className={priorityUncertain}
                        value={newSong.priority}
              
                      >
                
                        <DialogTitle 
                          defaultValue={'  '}
                          className={selectTitle} >
                          &nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;
                        </DialogTitle>
                        
                          <MenuItem 
                            value={'1'} 
                            className={setPriority1}>
                            &nbsp;&nbsp;Group One&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'2'} 
                            className={setPriority2}>
                            &nbsp;&nbsp;Group Two&nbsp;&nbsp;
                          </MenuItem>
                  
                          <MenuItem 
                            value={'3'} 
                            className={setPriority3}>
                            &nbsp;Group Three
                          </MenuItem>
                  
                          <MenuItem 
                            value={'Uncertain'} 
                            className={setPriorityUncertain}>
                            &nbsp;&nbsp;&nbsp;Uncertain
                            </MenuItem>
          
                      </Select> 
        
                  </FormControl>
          
                </div>
              :

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
                    className={blankPriority}
                    value={newSong.priority}
          
                  >
            
                    <DialogTitle 
                      defaultValue={'  '}
                      className={selectTitle} >
                      &nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;
                    </DialogTitle>
                    
                      <MenuItem 
                        value={'1'} 
                        className={setPriority1}>
                        &nbsp;&nbsp;Group One&nbsp;&nbsp;
                      </MenuItem>
              
                      <MenuItem 
                        value={'2'} 
                        className={setPriority2}>
                        &nbsp;&nbsp;Group Two&nbsp;&nbsp;
                      </MenuItem>
              
                      <MenuItem 
                        value={'3'} 
                        className={setPriority3}>
                        &nbsp;Group Three
                      </MenuItem>
              
                      <MenuItem 
                        value={'Uncertain'} 
                        className={setPriorityUncertain}>
                        &nbsp;&nbsp;&nbsp;Uncertain
                        </MenuItem>
      
                  </Select> 
    
              </FormControl>
      
            </div>
    
              }
          
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