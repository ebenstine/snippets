import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* reviseAlbum(action) {
    try {
        /*const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,*/
       // };
        console.log('**action.payload is:', action.payload);
        yield axios.put(`/api/album/${action.payload.id}`, action.payload);

        yield put({
            type: 'FETCH_ALBUM_DETAILS',
            payload: action.payload.id
        })
    } catch (error) {
        console.log('Album PUT request failed', error)
    }
}

function* albumRevise() {
    yield takeLatest('REVISE_ALBUM', reviseAlbum);
}

export default albumRevise;