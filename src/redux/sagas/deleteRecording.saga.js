import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* audioDelete(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        let id = (action.payload.id);
 
        yield axios.delete(`/api/recording/${id}`, config);
        yield put({ type: 'FETCH_RECORDINGS', payload: action.payload.song_id});
        
    } catch (error) {
        console.log('Song DELETE request failed', error)
    }
}

function* deleteAudio() {
    yield takeLatest('DELETE_AUDIO', audioDelete);
}

export default deleteAudio;
