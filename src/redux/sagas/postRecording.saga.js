import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postRecording(action) {
    try {
        {/*const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };*/}

        yield axios.post('/api/recording', action.payload);
        yield put({ type: 'FETCH_RECORDINGS', payload: action.payload.id})

    } catch (error) {
        console.log('Recording POST request failed', error)
    }
}
function* addRecording() {
    yield takeLatest('POST_NEW_RECORDING', postRecording);
}

export default addRecording;
