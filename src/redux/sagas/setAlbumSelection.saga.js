import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getAlbum(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload
        if (id === 1.1){
            return 
        } else {
            const response = yield axios.get(`/api/album/${id}`, config);
        
            yield put({ type: 'SET_SELECTED_ALBUM', payload: response.data})
        }
    } catch (error) {
        console.log('recordings GET request failed', error)
    }
}

function* setAlbumSaga() {
    yield takeLatest('FETCH_ALBUMS', getAlbum);

}

export default setAlbumSaga;