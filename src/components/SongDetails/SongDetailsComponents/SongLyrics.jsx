import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: theme.spacing(1),
        width: '64ch',
        marginBottom: '-.2em'
    },
    buttons: {
        // margin: '1em'
    },
    lyricMargin: {
        width: '75%'
    },
    text: {
        fontSize: 15,
        fontWeight: 400,
        whiteSpace: 'pre-line'
    }
}));

const SongLyrics = ({ lyrics, dispatch, song }) => {
    const { textField, buttons, lyricMargin, text } = useStyles();
    const [editable, setEditable] = useState(false);
    const { handleSubmit, register } = useForm();

    const handleEditable = () => {
        setEditable(editable => !editable)
    }

    const onSubmit = (data) => {
        data = { ...data, id: song.id }
        setEditable(editable => !editable);
        dispatch({ type: 'EDIT_SONG', payload: data })
    }
    return (
        <>
            {editable ?
                <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <TextField
                            label="Lyrics" name="lyrics" defaultValue={`${lyrics}`}
                            inputRef={register} onDoubleClick={handleEditable}
                            margin="normal" multiline className={textField}
                        />
                        <div className={buttons}>
                            <Button onClick={handleEditable}> CANCEL </Button>
                            <Button type="submit"> SAVE </Button>
                        </div>
                    </form>
                </FormControl>
                :
                <div className={lyricMargin}>

                    <Typography variant="body2" component="h6" paragraph={true}
                        onDoubleClick={handleEditable} className={text}>
                        Lyrics: <br />
                        {`${lyrics}`}
                    </Typography>

                </div>
            }
        </>
    )
}

const mapStoreToProps = (reduxState) => {
    return {
        lyrics: reduxState.song.lyrics,
        song: reduxState.song
    };
};
export default connect(mapStoreToProps)(SongLyrics);