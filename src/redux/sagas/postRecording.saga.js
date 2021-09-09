import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postRecording(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        yield axios.post('/api/recording', action.payload, config);
        yield put({ type: 'FETCH_RECORDINGS', payload: action.payload.song_id})

    } catch (error) {
        console.log('Song POST request failed', error)
    }
}
function* addRecording() {
    yield takeLatest('ADD_RECORDING', postRecording);
}

export default addRecording;
