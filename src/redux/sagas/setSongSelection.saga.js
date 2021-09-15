import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload

        const response = yield axios.get(`/api/song/${id}`, config);
        
        yield put({ type: 'SETTING_SELECTED_SONG', payload: song.data[0]})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}

function* setSongSaga() {
    yield takeLatest('SETTING_SONG', getSong);
}

export default setSongSaga;
