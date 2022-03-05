const songDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_ALBUM':
        return action.payload;
        default:
            return state;
    }
};

export default songDetails;