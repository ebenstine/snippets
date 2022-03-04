const songs = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALBUMS':
            return action.payload;
        default:
            return state;
    }
}

export default songs;