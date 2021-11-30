import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* audioDelete(action) {
    try {
        
       
        
 
        yield axios.delete(`/api/recording/${action.payload}`);
        yield put({ type: 'FETCH_RECORDINGS' /*payload: action.payload.song_id*/});
        
    } catch (error) {
        console.log('Song DELETE request failed', error)
    }
}

function* deleteAudio() {
    yield takeLatest('DELETE_AUDIO', audioDelete);
}

export default deleteAudio;
