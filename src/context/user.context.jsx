import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserDocFromAuth, onAuthStateChangeListner } from "../Utils/FireBase/FireBaseUtils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    useEffect(() => {

        onAuthStateChangeListner((user) => {
            if(user){
                createUserDocFromAuth(user)
            }

            setCurrentUser(user)
        })

    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}