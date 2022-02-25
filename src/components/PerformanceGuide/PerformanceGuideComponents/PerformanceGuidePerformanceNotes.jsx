import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';
import { TextField } from '@mui/material';
import { DescriptionOutlined } from '@material-ui/icons';


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
        marginLeft: '8.5em'
    },

    buttons:  {
        color: '#2a4f64',
        marginTop:'.75em',
       
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

    notesHover: {
        color: "#233d4d",
        display: 'flex',
        justifyContent: 'center'
    },
    notesText: {
        color:'#233d4d', 
        borderBottom: '1px solid #1d778d',
        
        '&:hover': {
            borderBottom: '1.5px solid #1d778d',
            cursor: 'pointer'
        },
        
        fontSize: 11,
        whiteSpace: 'pre-wrap',
        
        
    },

    notesDiv: {

        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center'
        

    }
}));
        
        function PerformanceGuidePerformanceNotes() {
            const songDetails = useSelector(store => store.songDetails);
            const dispatch = useDispatch();
            const params = useParams();
            const history = useHistory();
            
            const { 
                    textField, 
                    buttons, 
                    notes, 
                    notesHover,
                    notesDiv,
                    notesText,
                    root, 
                    actions 
                } = useStyles();
        
            const [ editable, setEditable ] = useState(false);
            const [ updated, setUpdated ] = useState(false);
            console.log(params);
            let song = {
                performance_notes: songDetails.performance_notes
            
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
                                
                                        
                                            <TextField
                     
                                                label="Update Performance Notes" 
                                                name="performance_notes"
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
                                    <div>
                                    
                                        <Typography variant="caption" className={notesHover}>
                                            Technique Notes:    
                                        </Typography>
                                    
                                    </div>

                                    <Typography 

                                        component="span" 
                                        className={notesText}
                                    >

                                        {`${reviseDetails.performance_notes}`}

                                    </Typography>
                                    </>
                                    :
                                    <>
                                    <div>
                                    
                                        <Typography variant="caption" className={notesHover}>
                                            Technique Notes:    
                                        </Typography>
                                    
                                    </div>
                                    <div className={notesDiv}>
                                    <Typography 

                                        className={notesText}
                                        
                                    >

                                        <DescriptionOutlined style={{fontSize:15, color: '#1d778d'}}/>{song.performance_notes}

                                    </Typography>
                                    </div>
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
        
        
        
    export default PerformanceGuidePerformanceNotes;