import { createContext, useContext, useReducer, useState } from "react"

export const UserContext = createContext()



export const UsersContext = ({ children }) => {
    const [allUser, SetallUser]=useState([])
    const [allUserSearch, SetallUserSearch]=useState([])
    return (
        <UserContext.Provider value={{allUser, SetallUser, allUserSearch, SetallUserSearch}}>
            {children}
        </UserContext.Provider>
    )
}
