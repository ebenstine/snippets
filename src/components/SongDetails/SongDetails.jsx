//this component contains a substantial portion of the app's capabilities.
//it is significantly refactored currently but needs include:

//create components for un-editable song items, and refactor that code so the conditional rendering is crisp
//create component for action buttons (setActive, setInactive) refactor the code

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import InactiveSongDetails from '../InactiveArchive/InactiveSongDetails';
import ActiveSongDetails from './SongDetailsComponents/ActiveSongDetails';
import InactiveArchiveStatus from '../InactiveArchive/InactiveArchiveStatus';
import SongStatus from './SongDetailsComponents/SongStatus';

function SongDetails(){
    
    const params = useParams();
    const dispatch = useDispatch();

 
    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, []);
    const songDetails = useSelector((store) => store.songDetails)
    const songs = useSelector((store) => store.songs)

    
    return (
        
        <div>
            
            
            {songDetails.map((song) => {
                        
                return (
                    <>
                        {song.is_active === true ? 
                                    
                        <ActiveSongDetails/> 
                
                        :
                        
                        song.is_active === false ? 
                        
                        <InactiveSongDetails/> 
                        
                        :

                        null 

                        }

                        
                    
                    </>
                
                )
            
            })}
                    
        </div>
        
    )

}
export default SongDetails;