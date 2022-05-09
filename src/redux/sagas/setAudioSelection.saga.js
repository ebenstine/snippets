import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getRecording(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload
        if (id === 1.1){
            return 
        } else {
            const response = yield axios.get(`/api/recording/${id}`, config);
        
            yield put({ type: 'SET_SELECTED_RECORDING', payload: response.data})
        }
    } catch (error) {
        console.log('recordings GET request failed', error)
    }
}

function* setRecordingSaga() {
    yield takeLatest('FETCH_SONGS', getRecording);

}

export default setRecordingSaga;
