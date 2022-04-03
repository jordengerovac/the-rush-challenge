export default (state, action) => {
    switch(action.type) {
        case 'UPLOAD_PLAYERSTATS':
            return {
                ...state,
                playerStats: [action.payload, ...state.playerStats]
            }
        default:
            return state;
    }
}