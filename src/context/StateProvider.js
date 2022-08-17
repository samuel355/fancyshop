import React, {createContext, useContext, useReducer} from 'react';

export const StateContext  = createContext();

export const StateProvider = ({reducer, initialSate, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialSate)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)