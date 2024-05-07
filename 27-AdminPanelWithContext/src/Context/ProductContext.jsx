import { createContext, useContext, useReducer, useState } from "react"

export const ProductContext = createContext()



export const ProductsContext = ({ children }) => {
    const [allData, SetAllData]=useState([])
    const [allDataSearch, SetallDataSearch]=useState([])
    return (
        <ProductContext.Provider value={{allData, SetAllData, allDataSearch, SetallDataSearch}}>
            {children}
        </ProductContext.Provider>
    )
}
