//this is the input component for the property
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button} from '@material-ui/core';
import { FormControl, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';
import { Lightbulb, Piano, DescriptionOutlined } from '@mui/icons-material';
const useStyles = makeStyles(() => ({
    root: {
         
      
        '& .MuiTextField-root': {
            //marginLeft: '3em',
            color: '#1d778d',
            
            '&:hover fieldset': {
              borderColor: '#ffab5c'
            }
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#3b95ac',
            borderColor: '#ffab5c',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        }, 
            
            
            
        
        "& .MuiOutlinedInput-input": {
            color: "#1d778d",
           
            
        },
        //"& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            //border: "2px solid #3b95ac"
          //},
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1.5px solid#3b95ac",
            borderRadius: "3px 3px 3px 3px"
          },
        
  
          
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                color: '#3b95ac',
                //paddingLeft: '4em'
                
            },
            '& .Mui-selected': {
  
               borderColor: '3b95ac'
  
            },
            '&:hover fieldset': {
                border:' 1.5px solid #3b95ac' 
            },  
            '&:fieldset.Mui-focused': {
                border:' 1.5px solid #3b95ac'
            
            },

            
            
      },
    },


    textField: {
        
        width: '35ch',
        marginBottom: '1em',
        marginTop: '1em',
        color: '#1d778d'
        //marginLeft: '2em',
        //marginRight: '2em'
    },

    subheading: {
        //marginLeft: '.5em',
        marginBottom: '1.5em',
        marginTop: '.5em'
    },
    actions: {
        
        marginTop: '1em',
        marginLeft: '4em',
        //marginRight: '3em'
    },

    buttons:  {
        background: "#fff099",
        color: "#2a4f64",
        border: "1px solid #3b95ac",
        marginBottom: "2em",
        marginTop: "3em",
        marginLeft:'1em',
        '&:hover': {
            background:'#fde76c',
            },
        
    
    },

    

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#2a4f64', 
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            cursor: 'pointer'
        }
    },
}));

function SongInstrumentSpecs() {
    const songs = useSelector (store => store.songs);
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { 
        
            textField, 
            buttons, 
            notes, 
            root, 
            actions 
        
        } = useStyles();

    
    console.log(params);

    let song = {
      instrument_specs: songDetails.instrument_specs,
  
    };
  
    const [reviseDetails, setReviseDetails] = useState(song);
  
  
    const handleChange = (event) => {
      setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };
    

  
  
  
    const handleCancel = () => {
        history.push(`/songDetails/${params.id}`)
    }
  
  
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
    
  
    return (
        <>
            {songDetails.map((song) => {

                return (

                <>
            
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
                                    placeholder="enter instrument or software"
                                    
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
                        <Button className={buttons} onClick={handleCancel} variant="outlined"><Cancel/></Button>
                        <Button className={buttons} variant="outlined" type="submit"><CheckCircle/></Button>
                        </div>
                    </form>
                    </FormControl>
                </>
            )
            
            })}
                
            
        </>
   
    )
}



export default SongInstrumentSpecs;