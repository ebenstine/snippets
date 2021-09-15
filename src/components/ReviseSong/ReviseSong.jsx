import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Button,
  makeStyles,
  Chip,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Collapse,
  IconButton,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function ReviseSong({
  reviseOpen,
  setReviseOpen,
  reviseSong,
  setReviseSong,
  reviseRecording,
  setReviseRecording,
  id,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const genres = useSelector((state) => state.genresReducer);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSubmit = () => {
    if (
      reviseSong.title &&
      reviseSong.poster &&
      reviseSong.description &&
      editGenre[0]
    ) {
      dispatch({
        type: 'EDIT_MOVIE',
        payload: { ...reviseSong, genreArray: editGenre },
      });
      setEditGenre([]);
      setEditMovie({ id: null, title: '', poster: '', description: '' });
      setEditOpen(false);
      history.push(`/details/${id}`);
    } else {
      setAlertOpen(true);
    }
  };

  const handleTextChange = (key) => (event) => {
    setEditMovie({ ...editMovie, [key]: event.target.value });
  };

  const handleGenreAddition = (id) => {
    if (editGenre.indexOf(id) === -1) {
      setEditGenre([...editGenre, id]);
    } else {
      setEditGenre(editGenre.filter((entry) => entry !== id));
    }
  };

  const handleCancel = () => {
    setEditOpen(false);
    setEditGenre([]);
    setEditMovie({ title: '', poster: '', description: '' });
  };

  console.log(editMovie);
  console.log(editGenre);

  return (
    <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
      <Box p={3}>
        <DialogTitle align="center">Edit Movie</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <Box width="50%" p={1}>
              <TextField
                fullWidth
                variant="outlined"
                label="Movie Title"
                onChange={handleTextChange('title')}
                value={editMovie.title}
              />
            </Box>
            <Box width="50%" p={1}>
              <TextField
                fullWidth
                variant="outlined"
                label="Poster Image Link"
                onChange={handleTextChange('poster')}
                value={editMovie.poster}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box width="50%" p={1}>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                label="Movie Description"
                onChange={handleTextChange('description')}
                value={editMovie.description}
                rows={10}
              />
            </Box>
            <Box className={classes.root} width="50%" p={1}>
              {editGenre &&
                genres.map((entry) => {
                  return (
                    <Chip
                      key={entry.id}
                      label={entry.name}
                      color={
                        editGenre.indexOf(entry.id) === -1
                          ? 'default'
                          : 'primary'
                      }
                      onClick={() => handleGenreAddition(entry.id)}
                    />
                  );
                })}
            </Box>
          </Box>
        </DialogContent>
        <Box display="flex" justifyContent="center">
          <DialogActions>
            <Button
              variant="contained"
              color="default"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogActions>
        </Box>
      </Box>
      <Collapse in={alertOpen}>
        <Alert
          severity="error"
          action={
            <IconButton
              color="inherit"
              size="small"
              onClick={() => setAlertOpen(false)}
            >
              <Close />
            </IconButton>
          }
        >
          Please fill out all fields!
        </Alert>
      </Collapse>
    </Dialog>
  );
}

export default EditMovie;