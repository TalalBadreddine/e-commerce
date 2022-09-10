import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCategoriesAndDocuments } from "../Utils/FireBase/FireBaseUtils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoriesMap)
        }

        getCategoriesMap()
    },[])

    const val = {categoriesMap}

    return <CategoriesContext.Provider value={val}>{children}</CategoriesContext.Provider>
}