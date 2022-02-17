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
import { Paper, TextField, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';


const useStyles = makeStyles(() => ({

    root: {

        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2a4f64',
                
            },
            '&:hover fieldset': {
                borderColor: '#2a4f64',
                
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
        marginLeft: '7.5em',
    },

    buttons:  {
        color: '#2a4f64'
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
        }
    },
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
            actions 
        } = useStyles();

    const [ editable, setEditable] = useState(true);
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
                                        label="Update Guitar Tuning" 
                                        name="instrument_specs"
                                        onDoubleClick={handleEditable}
                                        margin="dense" 
                                        multiline className={textField} 
                                        onChange={handleChange}
                                    /> 

                                :

                                song.primary_instrument === 'keyboard' ?

                                    <TextField
                                        
                                        label="Update Keyboard Model" 
                                        name="instrument_specs"
                                        onDoubleClick={handleEditable}
                                        margin="dense" 
                                        multiline className={textField} 
                                        onChange={handleChange}
                                
                                    />
                                :

                               
                                    
                                    <TextField

                                        label="Update Instrument or Software"
                                        name="instrument_specs"
                                        onDoubleClick={handleEditable}
                                        margin="dense" 
                                        multiline className={textField} 
                                        onChange={handleChange}
                                    />
                                }
                            
                            
                                <div className={actions}> 

                                    <Button className={buttons} onClick={handleCancel}><Cancel/></Button>
                                    <Button className={buttons} variant="filled" type="submit"><CheckCircle/></Button>
                                    
                                </div>
                    
                            </form>
                        
                        </FormControl>
                
                    :
                
                        <div onDoubleClick={handleEditable}>

                            {song.primary_instrument === 'guitar' ? 
                                
                                <div>
                                    <Typography variant="caption" style={{color:'#233d4d'}}>
                                        Guitar Tuning:    
                                    </Typography>
                                </div>

                            :

                            song.primary_instrument === 'keyboard' ?

                                <div>
                                    <Typography variant="caption" style={{color:'#233d4d'}}>
                                        Keyboard Type:   
                                    </Typography>
                                </div>

                            :
                                <div>
                                    <Typography variant="caption" style={{color:'#233d4d'}}>
                                        Instrument or Software Type:  
                                    </Typography>
                                </div>
                            
                            }


                                <Typography 
                                    
                                    component="span" 
                                    className={notes}
                                >
                            
                                    {`${reviseDetails.instrument_specs}`}
        
                                </Typography>
                        </div>

                    }
            
                </>
        
            )
        
        })}

    </>
)
}



export default PerformanceGuideInstrumentSpecs;