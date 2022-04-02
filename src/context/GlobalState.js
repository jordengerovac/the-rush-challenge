import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    playerStats: [{
        "Player":"Joe Banyard",
        "Team":"JAX",
        "Pos":"RB",
        "Att":2,
        "Att/G":2,
        "Yds":7,
        "Avg":3.5,
        "Yds/G":7,
        "TD":0,
        "Lng":"7",
        "1st":0,
        "1st%":0,
        "20+":0,
        "40+":0,
        "FUM":0
    },
    {
        "Player":"Shaun Hill",
        "Team":"MIN",
        "Pos":"QB",
        "Att":5,
        "Att/G":1.7,
        "Yds":5,
        "Avg":1,
        "Yds/G":1.7,
        "TD":0,
        "Lng":"9",
        "1st":0,
        "1st%":0,
        "20+":0,
        "40+":0,
        "FUM":0
    }]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider componenet
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{playerStats: state.playerStats}}>
            {children}
        </GlobalContext.Provider>
    );
}