import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, MenuItem, Button, Typography, DialogTitle, Dialog} from '@material-ui/core';
import { TextField } from '@mui/material'
import { Select, FormControl, InputLabel } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';
import Backup from '@material-ui/icons/Backup';
import Cancel from '@material-ui/icons/Cancel';
import { PlayArrowRounded } from '@material-ui/icons';
import { PlayDisabledRounded } from '@mui/icons-material';
import { Piano } from '@mui/icons-material';
import { Lightbulb } from '@mui/icons-material';
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material';
import { Album } from '@mui/icons-material';



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
          setGuitar,
          setKeyboard,
          setOther
          
        
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
                  label=
                  {<img 
                    style={{width:21, height:21}} 
                    src='top.png'
                    >
                  </img>
                  }
                  placeholder= "Title"
                  onChange={enterNewSong('title')}
                  value={newSong.title}
                  error={errorState}
                  multiline className={textField}
                />
          
                <TextField
                  label=
                  {<img 
                    style={{width:16, height:16}} 
                    src='quill.png'
                    >
                  </img>
                  }
                  placeholder = "Songwriting Notes"
                  onChange={enterNewSong('songwriting_notes')}
                  value={newSong.songwriting_notes}
                  multiline className={textField}

                />
         
                <TextField
                
                  label=
                    {<img 
                      style={{width:16, height:16}} 
                      src='sound-faders.png'
                      >
                    </img>
                    }
                  placeholder = "Production Ideas"
                  onChange={enterNewSong('production_ideas')}
                  value={newSong.production_ideas}
                  multiline className={textField}

                />

                <TextField
                  label=
                  {<img 
                    style={{width:21, height:21}} 
                    src='lyrics.png'
                    >
                  </img>
                  }
                  placeholder = "Lyrics"
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
                        label="Status"
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
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                            <PlayArrowRounded/>&nbsp;Active
                            </div>
                          </MenuItem>
                          
                          <MenuItem 
                            value={false} 
                            className={setInactive}>
                              <div style={{display:'flex', flexWrap:'wrap'}}>
                            <PlayDisabledRounded/>&nbsp;Inactive
                              </div>
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
                        label="Instrument"
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
                            className={setGuitar}>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <b><img style={{width:22, height:22}} src="specsHeadstock.png"></img></b>&nbsp;Guitar
                            </div>
                          </MenuItem>
                          
                          <MenuItem 
                            value={'keyboard'} 
                            className={setKeyboard}>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Piano/>&nbsp;Keyboard
                            </div>
                          </MenuItem>
                          


                          <MenuItem 
                            value={'other'} 
                            className={setOther}>

                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <Lightbulb style={{}}/>&nbsp;Other
                            </div>
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
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                            <img src='selectVinyl.png' style={{height:20, width:20}}></img>&nbsp;Group One
                            </div>
                          </MenuItem>
                  
                          <MenuItem 
                            value={'2'} 
                            className={setPriority2}>
                            <div style={{display:'flex', flexWrap:'wrap'}}>
                            <img src='selectVinyl.png' style={{height:20, width:20}}></img>&nbsp;Group Two
                            </div>
                          </MenuItem>
                  
                          <MenuItem 
                            value={'3'} 
                            className={setPriority3}>
                            <div style={{display:'flex', flexWrap:'wrap'}}> 
                            <img src='selectVinyl.png' style={{height:20, width:20}}></img>&nbsp;Group Three
                            </div>
                          </MenuItem>
                  
                          <MenuItem 
                            value={'Uncertain'} 
                            className={setPriorityUncertain}>
                            <div style={{display:'flex', flexWrap:'wrap'}}> 
                            <IndeterminateCheckBoxOutlined/>&nbsp;Uncertain
                            </div>
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