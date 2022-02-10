import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getChordDiagrams(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const id = action.payload
        if (id === 1.1){
            return 
        } else {
            const response = yield axios.get(`/api/chord_diagram/${id}`, config);
        
            yield put({ type: 'SET_SELECTED_DIAGRAMS', payload: response.data})
        }
    } catch (error) {
        console.log('diagrams GET request failed', error)
    }
}

function* setDiagramsSaga() {
    yield takeLatest('FETCH_DIAGRAMS', getChordDiagrams);

}

export default setDiagramsSaga;