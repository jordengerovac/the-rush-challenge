export default (state, action) => {
    switch(action.type) {
        case 'GET_PLAYERSTATS':
            return {
                ...state,
                loading: false,
                playerStats: action.payload
            }
        case 'UPLOAD_PLAYERSTATS':
            return {
                ...state,
                playerStats: [...state.playerStats, action.payload]
            }
        case 'PLAYERSTATSERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}