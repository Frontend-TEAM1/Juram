import { createContext, useContext } from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const userReducer = (state, action) => {
    switch(action.type) {
        case "ADD_to_LIST":
            console.log(action)
            return [...state, action.payload];
        case "ADD_EDIT_PROP":
            return;
        case "RESET":
            return;
        case "SUBMIT":
            return;
        default:
            return state;
    }
}