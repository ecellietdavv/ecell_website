import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

const initialState = {
    darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
    openDrawer: false,
    openModal: false,
    modalContent: { name: "", body: "" }
};

export const StoreContext = createContext({
    state: initialState,
    dispatch: () => null,
});

export const reducer = (
    state,
    action
) => {
    switch (action.type) {
        case 'DARK_MODE_ON':
            return { ...state, darkMode: true };

        case 'DARK_MODE_OFF':
            return { ...state, darkMode: false };

        case 'CLOSE_DRAWER':
            return { ...state, openDrawer: false };

        case 'OPEN_DRAWER':
            return { ...state, openDrawer: true };

        case 'CLOSE_MODAL':
            return { ...state, openModal: false };

        case 'OPEN_MODAL':
            return { ...state, openModal: true };

        case 'SET_MODAL_CONTENT':
            return { ...state, modalContent: action.payload };
    }
};


export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};
