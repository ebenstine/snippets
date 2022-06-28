import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, MenuItem, Button, Typography, Select, FormControl, Accordion, AccordionSummary } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';
import { TextField } from '@mui/material';
import { DescriptionOutlined } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
        
        
        fontSize: 11,
        whiteSpace: 'pre-wrap',
        textAlign:'center'
        
        
    },

    card: {
        flexDirection: 'column',
        backgroundColor:  '#f0a1a1',
        color: 'rgb(250, 250, 175)',
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: '.5em',
        marginRight: '.5em',
        border: '1px solid #1d778d'
    },
    
    card1: {
        flexDirection: 'column',
        backgroundColor: '#afe4f1',
        color: 'rgb(250, 250, 175)',
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: '.5em',
        marginRight: '.5em',
        border: '1px solid #1d778d',
        borderRadius: '3px'
        
    },

    card2: {
        flexDirection: 'column',
        backgroundColor: '#ffb171',
        color: 'rgb(250, 250, 175)',
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: '.5em',
        marginRight: '.5em',
        border: '1px solid #1d778d',
        borderRadius: '3px'
        
    },

    card3: {
        flexDirection: 'column',
        backgroundColor: '#fdd377',
        color: 'rgb(250, 250, 175)',
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: '.5em',
        marginRight: '.5em',
        border: '1px solid #1d778d',
        borderRadius: '3px'
        
    },

    notesDiv: {
        
        paddingTop: '1em',
        paddingBottom:'1em',
        marginRight: '1.5em',
        marginLeft: '1.5em',
        marginBottom: '.5em',
        paddingLeft: '.75em',
        paddingRight:'.75em',
        '&:hover': {
            background:'#eb9292',
            borderRadius: '3px',
            cursor: 'pointer'
        }
        
    },

    notesDiv1: {
        
        paddingTop: '1em',
        paddingBottom:'1em',
        marginRight: '1.5em',
        marginLeft: '1.5em',
        marginBottom: '.5em',
        paddingLeft: '.75em',
        paddingRight:'.75em',
        '&:hover': {
            background:'#94d9eb',
            borderRadius: '3px',
            cursor: 'pointer'
        }
        
    },

    notesDiv2: {
        
        paddingTop: '1em',
        paddingBottom:'1em',
        marginRight: '1.5em',
        marginLeft: '1.5em',
        marginBottom: '.5em',
        paddingLeft: '.75em',
        paddingRight:'.75em',
        '&:hover': {
            background:'#f8a058',
            borderRadius: '3px',
            cursor: 'pointer'
        }
        
    },

    notesDiv3: {
        
        paddingTop: '1em',
        paddingBottom:'1em',
        marginRight: '1.5em',
        marginLeft: '1.5em',
        marginBottom: '.5em',
        paddingLeft: '.75em',
        paddingRight:'.75em',
        '&:hover': {
            background:'#fcca60',
            borderRadius: '3px',
            cursor: 'pointer'
        }
        
    },
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
                    card1,
                    card2,
                    card3,
                    card,
                    notesHover,
                    notesDiv1,
                    notesDiv2,
                    notesDiv3,
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
                            <Accordion
                                                    
                                raised={true}
                                className=
                                    {song.priority === '1' ?
                                        card1 : 
                                    song.priority === '2' ?
                                        card2 :
                                    song.priority === '3' ?
                                        card3 :

                                        card
                                    }
                            >
                        
                                <AccordionSummary
                                    
                                    expandIcon=
                                        
                                        {<ExpandMoreIcon 
                                        
                                            style={{ 
                                            
                                            color: '#1d778d',
                                            paddingRight: '.1em',
                                            
                                            
                                            }}

                                        />}
        
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            item xs={1} 
                                
                                        >
                                            <div
                        
                                            style={{
                                                color:'#233d4d',  
                                                
                                                display:'flex',
                                                justifyContent:'center'
                                            }}
                                            
                                            >
                                                <Typography 
                                                    variant="overline"
                                                    
                                                    >
                                                            Notes:
                                                </Typography>
                                            </div>
                                
                                </AccordionSummary>
                    
                                {editable ?
                            
                                    <FormControl>
                                
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
                                            
                                                <div className=
                                                    {song.priority === '1' ?
                                                        notesDiv1 : 
                                                    song.priority === '2' ?
                                                        notesDiv2 :
                                                    song.priority === '3' ?
                                                        notesDiv3 :
        
                                                        notesDiv
                                                    }
                                                >
                                                    <Typography 

                                                        component="span" 
                                                        className={notesText}
                                                    >

                                                    {`${reviseDetails.performance_notes}`}

                                                    </Typography>
                                                </div>
                                            </>
                                        :
                                            <>
                                            
                                                <div className=
                                                    {song.priority === '1' ?
                                                        notesDiv1 : 
                                                    song.priority === '2' ?
                                                        notesDiv2 :
                                                    song.priority === '3' ?
                                                        notesDiv3 :

                                                        notesDiv
                                                    }
                                                
                                                >
                                                    <Typography 

                                                        className={notesText}
                                                        
                                                    >

                                                        {song.performance_notes}

                                                    </Typography>
                                                </div>
                                            </>
                                    
                                        }

                                    </div>

                                }

                            </Accordion>
                    
                        </>
                
                    )
                
                })}

            </>
        )
    }
        
        
        
    export default PerformanceGuidePerformanceNotes;