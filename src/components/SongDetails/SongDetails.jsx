import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect } from 'react';
import Uploader from '../Uploader/Uploader';
import AddRecording from '../AddRecording/AddRecording';


function SongDetails(){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const songDetails = useSelector((store) => store.songDetails)
    console.log(songDetails);
    
    console.log(params);

    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, [params.id]);


    //back button path home
    const handleBack = () => {
        console.log('back to songs')
        history.goBack();
    }

    const handleDelete = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'DELETE_SONG',
            payload: songId
        })
    }

    const handleRevise = (songId) => {
       
    history.push(`/reviseSong/${songId}`)
    }

    //button to go back, map through details with id
    return (
        <div>
            

            <section className="songs">
            {songDetails.map((song) => {
                return (
                    <div key={song.id}>
                    <h4>"{song.title}"</h4>
                    <p>Lyrics: 
                        {song.lyrics}</p>
                    <p>Instrumentation notes: 
                        {song.instrument_notes}</p>
                    <p>Performance notes: 
                        {song.performance_notes}</p>
                    
                    
                    {/*Will pull in the form from AddRecording component, but it is currently non-functional
                    <AddRecording

                    />*/}


                    <Button variant="text" onClick={() => handleRevise(song.id)}>Revise Details</Button>
                    <Button variant="text" onClick={() => handleDelete(song.id)}>Delete Song</Button>
                    
                    </div>
                    
                    
                    
                )
            })}

            </section>
            
            <Button onClick={handleBack}>Back to List</Button>
            
            
        </div>
    )
}
export default SongDetails;
