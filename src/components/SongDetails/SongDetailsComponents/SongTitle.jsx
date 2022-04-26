import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, MenuItem, Button, Typography, Select } from '@material-ui/core';
import { TextField } from '@mui/material';
import { FormControl } from '@material-ui/core';
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
        
        width: '34ch',
        marginBottom: '1em',
        fontSize: 20
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

    title: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #eb9292 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

     title1: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #94d9eb 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

     title2: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #f8a058 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

     title3: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1px solid #6ca0ad',
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            background:'linear-gradient(6deg, #fcca60 37%, transparent 38%)',
            cursor: 'pointer'
            },

     },

    
}));

function SongTitle() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { textField, buttons, title, title1, title2, title3, root, actions } = useStyles();
    const [ editable, setEditable] = useState(false);
    const [ updated, setUpdated ] = useState(false);
    console.log(params);
    let song = {
      title: songDetails.title
  
    };
  
    const [reviseDetails, setReviseDetails] = useState(song);
  
  
    const handleChange = (event) => {
      setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };

    const handleEditable = () => {
        setEditable(editable => !editable)
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
                        
                        
                            <FormControl>
                                <form className={root} onSubmit={handleSubmit} autoComplete="off" >
                                    <TextField 
                                        label="Update Title" 
                                        name="title"
                                        
                                        onDoubleClick={handleEditable}
                                        margin="dense" 
                                        multiline className={textField} 
                                        onChange={handleChange}
                                        
                                        />
                                    <div className={actions}> 
                                    <Button className={buttons} onClick={handleEditable}><Cancel/></Button>
                                    <Button className={buttons} variant="filled" type="submit"><CheckCircle/></Button>
                                    </div>
                                </form>
                            </FormControl>
                        :
                        
                            <div onDoubleClick={handleEditable}>
                                {updated ?
                                
                                    <>
                                        <Typography 
                                            variant="overline" 
                                            className=
                                            {song.priority === '1' ?
                                                title1 :
                                             song.priority === '2' ?
                                                title2 :
                                             song.priority === '3' ?
                                                title3 :

                                                title 
                                            }
                                        >
                                            
                                        {`${reviseDetails.title}`}
                                        </Typography>
                                    </>

                                :

                                    <>
                                                    
                                        <Typography 
                                            variant="overline" 
                                            className=
                                                {song.priority === '1' ?
                                                    title1 :
                                                 song.priority === '2' ?
                                                    title2 :
                                                 song.priority === '3' ?
                                                    title3 :

                                                    title 
                                                }
                                            >
                                            {song.title}

                                        </Typography>
                                        
                                        

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



export default SongTitle;