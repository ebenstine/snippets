import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Delete from '@material-ui/icons/Delete';

import useStyles from './SongDetailsComponents/SongDetailsStyles';
import SongDetailsMenu from './SongDetailsComponents/SongDetailsMenu';
import SongTitle from './SongDetailsComponents/SongTitle';
import SongLyrics from './SongDetailsComponents/SongLyrics'
import SongInstrumentNotes from './SongDetailsComponents/SongInstrumentNotes';
import SongPerformanceNotes from './SongDetailsComponents/SongPerformanceNotes';


function SongDetails(){
    
    const { 
            
            title, 
            root, 
            card, 
            card1, 
            card2, 
            card3, 
            paper, 
            cardText, 
            cardContent,  
            menuDots, 
            button, 
            dialog, 
            dialogButtons 

        } = useStyles();

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [ editTitle, setEditTitle] = useState(false);
    const [ editLyrics, setEditLyrics] = useState(false);
    const [ editINotes, setEditINotes] = useState(false);
    const [ editPNotes, setEditPNotes] = useState(false);

    console.log(params);

    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, []);
    const songDetails = useSelector((store) => store.songDetails)

    const handleEditTitle = () => {
        setEditTitle(editTitle => !editTitle)
    }
    const handleEditLyrics = () => {
        setEditLyrics(editLyrics => !editLyrics)
    }
    const handleEditINotes = () => {
        setEditINotes(editINotes=> !editINotes)
    }
    const handleEditPNotes = () => {
        setEditPNotes(editPNotes => !editPNotes)
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    const handleDelete = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'DELETE_SONG',
            payload: songId
        })
       history.push('/songsList')
    }

    const handleCancel = () => {
        setOpen(false);
        handleClose();
      }

    

    //button to go back, map through details with id
    return (
        
        <div>
            <Paper className={paper} elevation={10}>
            
            <section className={root}>
            {songDetails.map((song) => {
                return (
                <>
                    <div key={song.id}>
                    {song.priority === '1' ?
                        
                        <Card spacing={1} className={card1}  raised={true}>
                        
                            <div className={menuDots}>
                    
                                <SongDetailsMenu/>
                            
                            </div>
                    
                   

                                <CardContent className={cardContent}>
                                    {editTitle ?
                                        
                                        <SongTitle/> :
                                        
                                        <div onDoubleClick={handleEditTitle}>
                            
                                            <Typography 
                                                variant="overline" 
                                                className={title}>
                                                {song.title}

                                            </Typography>

                                        </div>
                                        }
                        
                                    <br></br>

                                    {editLyrics ?
                                        
                                        <SongLyrics/> :

                                        <div onDoubleClick={handleEditLyrics}>

                                            <Typography 
                                                component = "p" 
                                                className={cardText}>

                                                {song.lyrics}

                                            </Typography>
                                        </div>}
                        
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                        
                                        {editINotes ?
                                            
                                            <SongInstrumentNotes/> :

                                            <div onDoubleClick={handleEditINotes}>

                                                <Typography 
                                                    component = "p" 
                                                    className={cardText}>
                                
                                                    ▶ Instrument Notes:
                                                    {' '}
                                                    {song.instrument_notes}

                                                </Typography>

                                            </div>}

                                            <br></br>

                                            {editPNotes ?

                                                <SongPerformanceNotes/> :

                                                <div onDoubleClick={handleEditPNotes}>

                                                    <Typography 
                                                        component = "p" 
                                                        className={cardText}>
                                
                                                        ▶ Performance Notes:
                                                        {' '}
                                                        {song.performance_notes}

                                                    </Typography>
                                                </div>}
                                        

                                                <br></br>
                     
                                </CardContent>
                    
                    </Card> : 
                    song.priority === '2' ?
                        
                    <Card spacing={1} className={card2}  raised={true}>
                    
                        <div className={menuDots}>
                
                            <SongDetailsMenu/>
                        
                        </div>
                
               

                            <CardContent className={cardContent}>
                                {editTitle ?
                                    
                                    <SongTitle/> :
                                    
                                    <div onDoubleClick={handleEditTitle}>
                        
                                        <Typography 
                                            variant="overline" 
                                            className={title}>
                                            {song.title}

                                        </Typography>

                                    </div>
                                    }
                    
                                <br></br>

                                {editLyrics ?
                                    
                                    <SongLyrics/> :

                                    <div onDoubleClick={handleEditLyrics}>

                                        <Typography 
                                            component = "p" 
                                            className={cardText}>

                                            {song.lyrics}

                                        </Typography>
                                    </div>}
                    
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                    
                                    {editINotes ?
                                        
                                        <SongInstrumentNotes/> :

                                        <div onDoubleClick={handleEditINotes}>

                                            <Typography 
                                                component = "p" 
                                                className={cardText}>
                            
                                                ▶ Instrument Notes:
                                                {' '}
                                                {song.instrument_notes}

                                            </Typography>

                                        </div>}

                                        <br></br>

                                        {editPNotes ?

                                            <SongPerformanceNotes/> :

                                            <div onDoubleClick={handleEditPNotes}>

                                                <Typography 
                                                    component = "p" 
                                                    className={cardText}>
                            
                                                    ▶ Performance Notes:
                                                    {' '}
                                                    {song.performance_notes}

                                                </Typography>
                                            </div>}
                                    

                                            <br></br>
                 
                            </CardContent>
                
                </Card> :
                    song.priority === '3' ?
                        
                    <Card spacing={1} className={card3}  raised={true}>
                    
                        <div className={menuDots}>
                
                            <SongDetailsMenu/>
                        
                        </div>
                
               

                            <CardContent className={cardContent}>
                                {editTitle ?
                                    
                                    <SongTitle/> :
                                    
                                    <div onDoubleClick={handleEditTitle}>
                        
                                        <Typography 
                                            variant="overline" 
                                            className={title}>
                                            {song.title}

                                        </Typography>

                                    </div>
                                    }
                    
                                <br></br>

                                {editLyrics ?
                                    
                                    <SongLyrics/> :

                                    <div onDoubleClick={handleEditLyrics}>

                                        <Typography 
                                            component = "p" 
                                            className={cardText}>

                                            {song.lyrics}

                                        </Typography>
                                    </div>}
                    
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                    
                                    {editINotes ?
                                        
                                        <SongInstrumentNotes/> :

                                        <div onDoubleClick={handleEditINotes}>

                                            <Typography 
                                                component = "p" 
                                                className={cardText}>
                            
                                                ▶ Instrument Notes:
                                                {' '}
                                                {song.instrument_notes}

                                            </Typography>

                                        </div>}

                                        <br></br>

                                        {editPNotes ?

                                            <SongPerformanceNotes/> :

                                            <div onDoubleClick={handleEditPNotes}>

                                                <Typography 
                                                    component = "p" 
                                                    className={cardText}>
                            
                                                    ▶ Performance Notes:
                                                    {' '}
                                                    {song.performance_notes}

                                                </Typography>
                                            </div>}
                                    

                                            <br></br>
                 
                            </CardContent>
                
                </Card> :
                    <Card spacing={1} className={card}  raised={true}>
                    
                    <div className={menuDots}>
            
                        <SongDetailsMenu/>
                    
                    </div>
            
           

                        <CardContent className={cardContent}>
                            {editTitle ?
                                
                                <SongTitle/> :
                                
                                <div onDoubleClick={handleEditTitle}>
                    
                                    <Typography 
                                        variant="overline" 
                                        className={title}>
                                        {song.title}

                                    </Typography>

                                </div>
                                }
                
                            <br></br>

                            {editLyrics ?
                                
                                <SongLyrics/> :

                                <div onDoubleClick={handleEditLyrics}>

                                    <Typography 
                                        component = "p" 
                                        className={cardText}>

                                        {song.lyrics}

                                    </Typography>
                                </div>}
                
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                
                                {editINotes ?
                                    
                                    <SongInstrumentNotes/> :

                                    <div onDoubleClick={handleEditINotes}>

                                        <Typography 
                                            component = "p" 
                                            className={cardText}>
                        
                                            ▶ Instrument Notes:
                                            {' '}
                                            {song.instrument_notes}

                                        </Typography>

                                    </div>}

                                    <br></br>

                                    {editPNotes ?

                                        <SongPerformanceNotes/> :

                                        <div onDoubleClick={handleEditPNotes}>

                                            <Typography 
                                                component = "p" 
                                                className={cardText}>
                        
                                                ▶ Performance Notes:
                                                {' '}
                                                {song.performance_notes}

                                            </Typography>
                                        </div>}
                                

                                        <br></br>
             
                        </CardContent>
            
            </Card> }
                    </div>
                    <br></br>
                    <br></br>
                    
                    <div>
                    
                        <Button className={button} variant="contained" onClick={handleClickOpen}><Delete/></Button>
                        
                            <Dialog open={open} onClose={handleClose} aria-labelledby="Rename song title input">
                                <DialogTitle className={dialog}>Delete This Song?</DialogTitle>
                                    <DialogContent className={dialog} >
                                        <DialogContentText>
                                            Is the song saved somewhere permanent, or somewhere in the process of being published to a public platform?
                                            If not, it's always possible more work could be added; maybe it should continue to live here.  What's the best move right now?
                                        </DialogContentText>
                                    </DialogContent>
                                <DialogActions className={dialog}>
                                    <Button className={dialogButtons} onClick={handleCancel} variant="contained">
                                    Cancel
                                    </Button>
                                    <Button className={dialogButtons} onClick={() => handleDelete(song.id)} variant="contained">
                                    Delete 
                                    </Button>
                                </DialogActions>
                            </Dialog>
                    </div>
                    
                </>
                )
            })}
                    
                    
            
                    </section>

            </Paper> 
        </div>
        
    )
}
export default SongDetails;