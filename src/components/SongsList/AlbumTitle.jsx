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

    titleTitle: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        borderBottom: '1.25px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#2a4f64',
        align: 'center'
        
    },

    
}));

function AlbumTitle() {
    const albums = useSelector(store => store.albums);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { textField, buttons, titleTitle, root, actions } = useStyles();
    const [ editable, setEditable] = useState(true);
  
    console.log(params);
    let album = {
      title: albums.title
  
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
    }
  
    return (
        <>
                 
                {/*<div onDoubleClick={handleEditable}>
                    <Typography variant="h5" component="h5" className={titleTitle}>
                        Change the title?  I know this is hard.
                        </div>
                    </Typography>*/}
                {editable? 
                
                
                <FormControl  >
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
                        <Button className={buttons} onClick={handleCancel}><Cancel/></Button>
                        <Button className={buttons} variant="filled" type="submit"><CheckCircle/></Button>
                        </div>
                    </form>
                </FormControl>
                :
                
                <div onDoubleClick={handleEditable}>
                    <Typography variant="overline" className={titleTitle}>
                    {`${reviseDetails.title}`}
                    </Typography>
                </div>
            }
            
        </>
   
    )
}



export default AlbumTitle;