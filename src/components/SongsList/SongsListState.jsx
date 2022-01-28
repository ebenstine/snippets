import React, { useEffect, useState } from 'react';
import useStyles from './SongsListStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import ColorCodeLegend from './ColorCodeLegend';
import CustomLists from './CustomLists/CustomLists'
import SongsList from './SongsList';


const SongsListState = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);

    const [showCustomLists, setShowCustomLists] = useState(false);

    useEffect(() => {
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
       
    },[]);

    return (
        <>
            {showCustomLists ? 

                <CustomLists/>

            :

                <SongsList/>

                
            
    }
        
        
        </>
    )
}

export default SongsListState;