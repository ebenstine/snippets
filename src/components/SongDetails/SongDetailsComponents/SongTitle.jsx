import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


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
        fontFamily: 'Source Sans Pro, sansSerif',
        fontSize: 28,
    },
}));

const SongTitle = ({ title, song }) => {
    const { textField, buttons, titleTitle } = useStyles();
    const [ editable, setEditable] = useState(false);
    const { handleSubmit } = useForm();
    const params = useParams();
    const dispatch = useDispatch();

    const handleEditable = () => {
        setEditable(editable => !editable)
    }

    const onSubmit = (data) => {
        data = {...data, id:params.id}
        dispatch({ 
            type: 'REVISE_SONG', 
            payload: data 
        })
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