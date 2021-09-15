import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';

function SongDetails(){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const songDetails = useSelector((store) => store.songDetails)
    console.log(songDetails);
    console.log('*****\n*****\n*****');
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
    //button to go back, map through details with id
    return (
        <div>
            <Button onClick={handleBack}>Back to List</Button>

            <section className="songs">
            {songDetails.map((song) => {
                return (
                    <div key={song.id}>
                    <h4>{song.title}</h4>
                    <p>{song.lyrics}</p>
                    <p>{song.instrument_notes}</p>
                    <p>{song.performance_notes}</p>
                    <Button variant="text" onClick={() => handleDelete(song.id)}>Delete Song</Button>

                    </div>
                )
            })}

            </section>
        </div>
    )
}
export default SongDetails;
