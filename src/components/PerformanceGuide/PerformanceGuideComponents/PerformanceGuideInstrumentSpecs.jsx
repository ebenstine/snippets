//conditional render of instrument spec 
// song.primaryInstrument === 'guitar' ? 
    // input form asks for guitar tuning
      // :
        //song.primaryInstrument === 'keyboard' ?
          // input form asks for keyboard type
            // : 
              // song.primaryInstrument === 'laptop' ?
                // input form asks for software used
                  // : 
                    // song.primaryInstrument === 'other' ?
                      // input form asks what instrument was used.
            // input value is song.instrument_spec, either way.

//!!! This will actually be the editable version of the performance guide text view for instrument_specs

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import { TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';
import { Piano } from '@mui/icons-material';
import { Lightbulb } from '@mui/icons-material';


const useStyles = makeStyles(() => ({

    root: {
         
      
        '& .MuiTextField-root': {
            marginLeft: '1em',
            color: '#2a4f64',
            
            '&:hover fieldset': {
              borderColor: '#eb9148'
            },

            '&::placeholder':{
              color: 'black'
          }
            //width: '25ch'
        },
        '& label.Mui-focused': {
            color: '#3b95ac',
            borderColor: '#eb9148',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#e45252',
        }, 
            
            
            
        
        "& .MuiOutlinedInput-input": {
            color: "#2a4f64",
           
            
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
        
        width: '42ch',
        marginBottom: '1em',
    },

    subheading: {
        marginLeft: '.5em',
        marginBottom: '1.5em',
        marginTop: '.5em'
    },
    actions: {
        marginBottom: '2em',
        marginTop: '-.75em',
        marginLeft: '8.5em',
    },

    buttons:  {
        color: '#2a4f64',
        marginTop: '.75em',
        
    },

    instSpecs: {
        
       // border:' 1.5px solid #3b95ac',
       // background: '#82bdcc',
        '&:hover': {
            background:'#82bdcc',
            borderRadius: '3px',
            cursor: 'pointer'
        }
        
    },

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        borderBottom: '1.25px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#233d4d',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            cursor: 'pointer'
        },
        align:'center'
    },

    specText: {
        color:'#233d4d', 
        display:'flex', 
        justifyContent:'center'
    }
}));

function PerformanceGuideInstrumentSpecs() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    
    const { 
            textField, 
            buttons, 
            notes, 
            root, 
            actions,
            instSpecs,
            specText

        } = useStyles();

    const [ editable, setEditable ] = useState(false);
    const [ updated, setUpdated ] = useState(false);
 
    console.log(params);
    let song = {
        instrument_specs: songDetails.instrument_specs
    
    };
    
    const [reviseDetails, setReviseDetails] = useState(song);

    
    
    const handleChange = (event) => {
        setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };

    const handleEditable = () => {
        setEditable(editable => !editable)
    }
    
    
    
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
        
                    setEditable(editable => !editable);
                    setUpdated(updated => !updated);
                    
    }
    
    return (
            
        <>
            
            {songDetails.map((song) => {
                
                return (
                
                    <>
                
                        {editable ?
                    
                            <FormControl  >
                        
                                <form className={root} onSubmit={handleSubmit} autoComplete="off" >
                            
                                    {song.primary_instrument === 'guitar' ?
            
                                        <TextField
                                        // IMPORTANT! 'THE ORIGINAL ENTRY', WHILE ALSO AN UPDATE, IS IN addReminder
                                            
                                            label={
                                                <img 
                                                    style={{width:22, height:22}} 
                                                    src='finalHeadstock.png'
                                                >
                                                </img>
                                            } 
                                            placeholder="Update Guitar Tuning"
                                            name="instrument_specs"
                                            onDoubleClick={handleEditable}
                                            margin="dense" 
                                            multiline className={textField} 
                                            onChange={handleChange}
                                        /> 

                                    :

                                    song.primary_instrument === 'keyboard' ?

                                        <TextField
                                            
                                            label={<Piano/>} 
                                            placeholder="Update Keyboard Type"
                                            name="instrument_specs"
                                            onDoubleClick={handleEditable}
                                            margin="dense" 
                                            multiline className={textField} 
                                            onChange={handleChange}
                                    
                                        />
                                    :

                                
                                        
                                        <TextField
                                            
                                            label={<Lightbulb/>}
                                            placeholder="Update Instrument or Software"
                                            name="instrument_specs"
                                            onDoubleClick={handleEditable}
                                            margin="dense" 
                                            multiline className={textField} 
                                            onChange={handleChange}
                                        />
                                    }
                                
                                
                                    <div className={actions}> 

                                        <Button className={buttons} onClick={handleEditable}><Cancel/></Button>
                                        <Button className={buttons} variant="filled" type="submit"><CheckCircle/></Button>
                                        
                                    </div>
                        
                                </form>
                            
                            </FormControl>
                    
                        :
                            
                            <div onDoubleClick={handleEditable}>
                                
                                {updated ?

                                song.primary_instrument === 'guitar' ?
                                    
                                    <div className={instSpecs}>
                                        
                                        <Typography variant= "overline" className={specText}>
                                            
                                            
                                            Updated Tuning: {reviseDetails.instrument_specs} 
                                            
                                        </Typography>
                                    </div>

                                :

                                song.primary_instrument === 'keyboard' ?

                                    <div className={instSpecs}>

                                        <Typography variant="overline" className={specText}>
                                            
                                            Updated Keyboard Type: {reviseDetails.instrument_specs} 
                                        
                                        </Typography>
                                    </div>

                                :
                                    <div className={instSpecs}>
                                        <Typography variant="overline" className={specText}>
                                            
                                            Updated Instrument or Software Type:  {reviseDetails.instrument_specs}

                                        </Typography>
                                    </div>
                                :
                                //this element probably needs all the conditional rendering for instrument type and language
                                    <>
                                
                                        {song.primary_instrument === 'guitar' && song.instrument_specs !== 'standard' ? 
                                            <>
                                                <div className={instSpecs}>

                                                    <Typography variant="overline" className={specText}>

                                                        Custom Tuning: {song.instrument_specs}

                                                    </Typography>

                                                </div> 
                                                
                                                <br></br> 
                                                
                                            
                                            </>
                                        :

                                            song.primary_instrument === 'guitar' && song.instrument_specs === 'standard' ?
                                                
                                                <>
                                                
                                                    <div className={instSpecs}>
                                                
                                                        <Typography variant="overline" className={specText}>

                                                            Tuning: {song.instrument_specs} 

                                                        </Typography>
                                                
                                                    </div>
                                                
                                                    <br></br>
                                                
                                                    
                                                </>
                                        :

                                            song.primary_instrument === 'keyboard' ?
                                                
                                                <>
                                                
                                                    <div className={instSpecs}>
                                                
                                                        <Typography variant="overline" className={specText}>

                                                            Keyboard Model: {song.instrument_specs}
                                                        
                                                        </Typography>
                                                
                                                    </div>
                                                
                                                    <br></br>
                                                
                                                    
                                                </>

                                        : 
                                                
                                            <>
                                                <div className={instSpecs}>
                                                
                                                    <Typography variant="overline">
                                                        
                                                        Instrument or Software Used: {song.instrument_specs}
                                                
                                                    </Typography>
                                                
                                                </div>
                                                
                                                
                                            
                                            </>

                                            }
                                
                                

                                    </>
                        
                                

                                }
                        
                            </div>
                        }
                    
                    </>
            
                )
            
            })}

        </>
    )
}



export default PerformanceGuideInstrumentSpecs;