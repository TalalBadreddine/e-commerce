import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../Utils/reducers/Reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) =>{
    const {type, payload} = action

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

export const UserProvider = ({children}) => {
    const [ { currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}