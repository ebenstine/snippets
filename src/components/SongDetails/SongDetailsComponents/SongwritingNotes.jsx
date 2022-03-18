import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Typography, FormControl } from '@material-ui/core';
import {TextField} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            color: '#2a4f64',
            border:'#2a4f64'
            //width: '25ch'
        },
        
        '& label.Mui-focused': {
            color: '#2a4f64',
            border: '#3b95ac'
        },

        '& .MuiInput-underline:before': {
            borderBottomColor: '#2a4f64',
    
        },

        '& .MuiInput-underline.Mui-selected': {
            borderBottomColor: '#2a4f64',
            
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        }, 
            
        "& .MuiOutlinedInput-input": {
            color: "#2a4f64",
            borderBottomColor:'#2a4f64'
            //border: "2px solid #3b95ac"
            
        },
       
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
        
        marginLeft: '7.5em',
    },

    buttons:  {
        color: '#2a4f64'
    },

    

    notes: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        
        whiteSpace: 'pre-wrap',
        color: '#2a4f64', 
        
    },

    notesDiv1: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#94d9eb',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesDiv2: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#f8a058',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesDiv3: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#fcca60',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    },

    notesDivUncertain: {

        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#eb9292',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '.3em',
        paddingTop: '.3em',
        display:'flex',
        flexWrap: 'wrap'


    }
}));

function SongWritingNotes() {
    const songs = useSelector (store => store.songs);
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { 
        
            textField, 
            buttons, 
            notes, 
            notesDiv1,
            notesDiv2,
            notesDiv3,
            notesDivUncertain,
            root, 
            actions 
        
        } = useStyles();

    const [ editable, setEditable] = useState(true);
    console.log(params);

    let song = {
      instrument_notes: songDetails.instrument_notes,
  
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
            {editable ?
                <FormControl  >
                    <form className={root} onSubmit={handleSubmit} autoComplete="off" >
                        <TextField 
                            label="Update Songwriting Notes" 
                            name="songwriting_notes"
                            
                            onDoubleClick={handleEditable}
                            margin="dense" 
                            multiline className={textField} 
                            onChange={handleChange}
                            
                            />
                        <div className={actions}> 
                        <Button className={buttons} onClick={handleCancel}><Cancel/></Button>
                        <Button className={buttons} variant="filled" type="submit"><CheckCircle/></Button>
                        </div>
                    </form>
                </FormControl>
                :
                
                <div onDoubleClick={handleEditable}>

                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                        <b><img style={{width:12, height:12, paddingTop:'-.5em' }} src="quill.png"></img></b> &nbsp;
                            <Typography variant="caption" style={{color:'#233d4d', borderBottom: '1px solid #6ca0ad' }}>
                                    Songwriting Notes:
                            </Typography>


                    </div>
                    
                    
                    {songDetails.map((item) => {
                       return (
                       <>
                       
                            <div className=
                                {item.priority === '1' ?
                                    notesDiv1 :
                                        item.priority === '2' ?
                                            notesDiv2 :
                                                item.priority === '3' ?
                                                    notesDiv3 :
                                                        notesDivUncertain
                                }
                                    
                            >
                        
                   
                                <Typography 
                                    
                                    component="p" 
                                    className={notes}>
                                
                                
                                {`${reviseDetails.songwriting_notes}`}

                                </Typography>
                            </div>
                        </>
                       )
                    })}
                </div>
            }
            
        </>
   
    )
}



export default SongWritingNotes;