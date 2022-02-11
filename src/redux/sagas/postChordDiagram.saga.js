import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postChordDiagram(action) {
    try {
        {/*const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };*/}

        yield axios.post('/api/chord_diagram', action.payload);
        yield put({ type: 'FETCH_DIAGRAMS', payload: action.payload.id})

    } catch (error) {
        console.log('Chord diagrams POST request failed', error)
    }
}
function* addChordDiagram() {
    yield takeLatest('POST_DIAGRAM', postChordDiagram);
}

export default addChordDiagram;