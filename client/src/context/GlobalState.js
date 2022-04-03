import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';

// Initial state
const initialState = {
    playerStats: [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider componenet
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function getPlayerStats() {
        try {
            const res = await axios.get('/api/v1/playerstats')

            dispatch({
                type: 'GET_PLAYERSTATS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'PLAYERSTATS_ERROR',
                payload: err.response.data.error
            });
            throw err;
        }
    }

    async function uploadPlayerStats(playerStats) {
        const config =  {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/v1/playerstats/upload', playerStats, config);

            dispatch({
                type: 'UPLOAD_PLAYERSTATS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'PLAYERSTATS_ERROR',
                payload: err.response.data.error
            });
            throw err;
        }
    }

    return (
        <GlobalContext.Provider value={{
            playerStats: state.playerStats,
            error: state.error,
            loading: state.loading,
            getPlayerStats,
            uploadPlayerStats
        }}>
            {children}
        </GlobalContext.Provider>
    );
}