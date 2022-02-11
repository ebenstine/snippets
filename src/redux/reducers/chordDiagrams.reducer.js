let initialState = [{
    image_path: ''
}]


const chordDiagrams = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_DIAGRAMS':
            return action.payload;
        default:
            return state;
    }
}

export default chordDiagrams;