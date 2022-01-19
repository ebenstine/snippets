//this component contains most of the app's capabilities.
//but, it is substantially refactored to subcomponents which are handling a lot of the actions


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
                        
                        
                        
                        null
                        

                        

                        }

                        
                    
                    </>
                
                )
            
            })}
                    
        </div>
        
    )

}
export default SongDetails;