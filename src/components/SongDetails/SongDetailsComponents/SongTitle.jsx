import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    textField: {
        margin: theme.spacing(1),
        width: '36ch',
        marginBottom: '1em',
    },
    subheading: {
        marginLeft: '.5em',
        marginBottom: '1.5em',
        marginTop: '.5em'
    },
    buttons:  {
        marginBottom: '2em',
        marginTop: '-1em',
        marginLeft: '7.5em'
    },
    titleTitle: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 20,
        color: '#233d4d',
        marginLeft: 'auto',
        marginTop: 'auto',
        borderBottom: '1.25px solid #6ca0ad'
    },
}));


const SongTitle = ({ title, song }) => {
    const { textField, subheading, buttons, titleTitle } = useStyles();
    const [ editable, setEditable] = useState(false);
    const { handleSubmit} = useForm();
    const params = useParams();
    const dispatch = useDispatch();

    const handleEditable = () => {
        setEditable(editable => !editable)
    }

    const onSubmit = (data) => {
        data = {...data, id: params.id}
        dispatch({ type: 'EDIT_SONG', payload: data })
        setEditable(editable => !editable);
    }
    return (
        <>
            {editable ?
                <FormControl  >
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
                        <TextField 
                            label="Title" name="song_title" defaultValue={`${title}`} onDoubleClick={handleEditable}
                            margin="dense" multiline className={textField} />
                        <div className={buttons}> 
                        <Button onClick={handleEditable}> CANCEL </Button>
                        <Button variant="filled" type="submit"> SAVE </Button>
                        </div>
                    </form>
                </FormControl>
                :
                <div onDoubleClick={handleEditable}>
                    <Typography variant="h5" component="h5" className={titleTitle}>
                        {`${title}`}
                    </Typography>
                </div>
            }
            
        </>
   
    )
}



export default SongTitle;