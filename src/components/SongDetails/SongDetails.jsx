import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, HelperText } from '@material-ui/core';
import { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Archive from '@material-ui/icons/Archive';
import Cancel from '@material-ui/icons/Cancel';
import Feedback from '@material-ui/icons/Feedback';

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
            dialogText,
            dialogContent, 
            cancelButton,
            archiveButton

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


      

    /*const handleArchive = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'REVISE_SONG',
            payload: songId
        })
       history.push/songsList
    }*/

    const handleCancel = () => {
        setOpen(false);
        handleClose();
      }

    

    
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

                                                        <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                            Instrument Notes:
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

                                                            <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                                Performance Notes:
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
                            
                                                    <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                        Instrument Notes:
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
                            
                                                        <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                            Performance Notes:
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
                                                    
                                                    <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                        Instrument Notes:
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

                                                        <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                            Performance Notes:
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

                                                <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                    Instrument Notes:
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

                                                    <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                        Performance Notes:
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
                    
                        <Button 
                            className={button} 
                            variant="contained" 
                            onClick={handleClickOpen}
                        >
                            <Archive/>
                            
                        </Button>
                        
                            <Dialog 
                                open={open} 
                                PaperProps={{
                                    style: 
                                        { border: "1px solid #e45252",
                                             
                                             background: "rgb(199, 246, 252)"
                                        }
                            
                                            }}
                                className={dialog} 
                                onClose={handleClose} 
                                
                            >
                                
                                <DialogTitle className={dialogContent}>
                                    <div>
                                    <Feedback 
                                        style = {{
                                            color: '#e45252',
                                            fontSize: 50,
                                            paddingTop: '-1em',
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            textStroke: '2px black'
                                        }}
                                    />
                                   
                                    </div>
                                </DialogTitle>
                                    
                                    <DialogContent className={dialogContent} >
                                        
                                        <DialogContentText className={dialogText}>
                                            
                                            Moving the song to the finished archive will remove your ability to 
                                            add new ideas or changes.  Do you want to do this?

                                        </DialogContentText>
                                    
                                    </DialogContent>
                               
                                <DialogActions className={dialogContent}>
                                    
                                    <Button 
                                        className={cancelButton} 
                                        onClick={handleCancel} 
                                        variant="contained"
                                    >
                                        <Cancel/>
                                    
                                    </Button>
                                    
                                    <Button 
                                        className={archiveButton} 
                                        onClick={() => handleArchived(song.id)} 
                                        variant="contained"
                                    >
                                    
                                        <Archive/>
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