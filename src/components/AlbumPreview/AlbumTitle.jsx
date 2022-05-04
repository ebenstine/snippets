import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';
import AlbumIcon from '@mui/icons-material/Album';



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
        
        width: '31ch',
        marginBottom: '1em',
        marginTop: '3em',
        fontSize: 20,
        //paddingLeft:'10em'
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

    titleTitle: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        borderBottom: '1.25px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#2a4f64',
        align: 'center'
        
    },
    albumSpec:{
        marginLeft: '3em',
        marginRight: '3em',
        //marginTop: '2em',
        marginBottom:'1em',
        color: '#2a4f64',
        display: 'flex',
        justifyContent:'center',
        background: 'rgb(230, 252, 255)',
        '&:hover': {
          background:'#94d9eb',
          cursor: 'pointer'
          },
        border: "1px solid #eb9148",
        borderRadius: "3px",
        paddingLeft:'1em',
        paddingRight:'1em',
        paddingTop:'.5em',
        paddingBottom:'.5em'
        
        
    },
    detailHeading:{
        marginLeft: '3em',
        marginRight: '3em',
        //marginTop: '2em',
        //marginBottom:'2em',
        color: '#2a4f64',
        
    },

    heading1: {
       
        color: '#2a4f64',
        //borderRadius: '2px',
        //marginTop: '1em',
        paddingBottom: '.2em',
        fontSize: 18,
        '&:hover': {
            
            cursor:'pointer',
            color:'#afe4f1'
            
          
        },
        display:'flex',
        justifyContent:'center'

    },

    heading2: {
       
        color: '#2a4f64',
        //borderRadius: '2px',
        //marginTop: '1em',
        paddingBottom: '.2em',
        fontSize: 18,
        '&:hover': {
            
            cursor:'pointer',
            color: '#ffb171'
            
          
        },
        display:'flex',
        justifyContent:'center'
    },

    heading3: {
        
        color: '#2a4f64',
        //borderRadius: '2px',
        //marginTop: '1em',
        paddingBottom: '.2em',
        fontSize: 18,
        '&:hover': {
            
            cursor:'pointer',
            color:'#fdd377'
            
          
        },
        display:'flex',
        justifyContent:'center'
    },

    
}));

function AlbumTitle() {
    const albumDetails = useSelector(store => store.albumDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { textField, buttons, titleTitle, root, actions, albumSpec, heading1, heading2, heading3 } = useStyles();
    const [ editable, setEditable] = useState(false);
    const [ updated, setUpdated] = useState(false);
  
    console.log(params);
    let album = {
      title: albumDetails.title
  
    };
  
    const [reviseDetails, setReviseDetails] = useState(album);
  
  
    const handleChange = (event) => {
      setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };

    const handleEditable = () => {
        setEditable(editable => !editable)
    }
  
  
  
    const handleCancel = () => {
        history.push(`/songsList`)
    }
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let revisedAlbum = reviseDetails;
      revisedAlbum = { ...revisedAlbum, id: params.id };
      console.log('new album revisions made in', revisedAlbum);
      dispatch({
        type: 'REVISE_ALBUM',
        payload: revisedAlbum
      });
        setEditable(editable => !editable);
        setUpdated(updated => !updated);
    }
  
    return (
        <>

            {albumDetails.map((album) => {
                
                return (    
                    <>
                    
                        {editable? 
                
                
                            <FormControl  >
                                <div style={{display:'flex', justifyContent:'center'}}>
                                <form className={root} onSubmit={handleSubmit} autoComplete="off" >
                                    <TextField 
                                        label="Update Album Title" 
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
                                </div>
                            </FormControl>
                        :

                            <div onDoubleClick={handleEditable}>

                                {updated ?
                                    
                                    <Typography variant="overline" className={titleTitle}>
                                    {`${reviseDetails.title}`}
                                    </Typography>
                                :
                                    <>
                                        <div>
                                            {album.id === 1 ?

                                                <Typography variant="overline" className={heading1} onClick={handleEditable}>

                                                    &nbsp;{album.title}

                                                </Typography>
                                            :
                                                album.id === 2 ?

                                                <Typography variant="overline" className={heading2} onClick={handleEditable}>

                                                    &nbsp;{album.title}

                                                </Typography>
                                            :
                                                album.id === 3? 

                                                <Typography variant="overline" className={heading3} onClick={handleEditable}>


                                                    &nbsp;{album.title}

                                                </Typography>
                                            :

                                                null 
                                                }
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



export default AlbumTitle;