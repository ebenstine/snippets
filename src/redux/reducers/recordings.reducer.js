const recordings = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECORDINGS':
            return action.payload;
        default:
            return state;
    }
}

export default recordings;
