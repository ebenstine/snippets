import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography, TextField, FormControl, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    textField: {
        // margin: theme.spacing(1),
        width: '64ch',
        marginBottom: '-.2em',
    },
    buttons: {
        marginBottom: '1em',
    },
    notesMargin: {
        width: '75%',
        paddingTop: '1em',
        fontSize: 15,
        fontWeight: 400,
        whiteSpace: 'pre-line'
    }

}));

const SongInstrumentNotes = ({ notes, dispatch, song }) => {
    const { textField, buttons, notesMargin } = useStyles();
    const [editable, setEditable] = useState(false);
    const { handleSubmit, register } = useForm();

    const handleEditable = () => {
        setEditable(editable => !editable)
    }

    const onSubmit = (data) => {
        data = { ...data, id: song.id }
        dispatch({ type: 'EDIT_SONG', payload: data })
        setEditable(editable => !editable);
    }

    return (
        <>
            {editable ?
                <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <TextField label="Instrument Notes" name="instrument_notes" defaultValue={`${instrument_notes}`} onDoubleClick={handleEditable}
                            inputRef={register} margin="dense" multiline className={textField} />

                        <div className={buttons}>
                            <Button onClick={handleEditable}> CANCEL </Button>
                            <Button type="submit"> SAVE </Button>
                        </div>

                    </form>
                </FormControl>
                :
                <Typography variant="body2" component="h5" onDoubleClick={handleEditable} className={notesMargin} >
                    Notes: <br />
                    {`${instrument_notes}`}
                </Typography>

            }
        </>
    )
}



const mapStoreToProps = (reduxState) => {
    return {
        notes: reduxState.song.instrument_notes,
        song: reduxState.song,
    };
};
export default connect(mapStoreToProps)(SongInstrumentNotes);