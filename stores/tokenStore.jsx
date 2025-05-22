import React, { createContext, useContext, useReducer } from 'react';

const tokenContext = createContext();

const initialState = {
    token: {},
};

const tokenReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'RETRIEVE_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'DELETE_TOKEN':
            return {
                ...state,
                token: {},
            };
        default:
            return state;
    }
};

export const tokenProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return <tokenContext.Provider value={{ state, dispatch }}>{children}</tokenContext.Provider>
};

export const useTokenContext = () => useContext(tokenContext);