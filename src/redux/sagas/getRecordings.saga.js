import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRecordings() {
    try {
    

        const response = yield axios.get('/api/recording');
    
        yield put({ type: 'SET_RECORDINGS', payload: response.data})

    } catch (error) {
        console.log('Recording GET request failed', error)
    }
}


function* getRecordingsSaga() {
    yield takeLatest('FETCH_RECORDINGS', getRecordings);
    
}

export default getRecordingsSaga;