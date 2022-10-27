import React, { createContext, useContext, useState } from "react";

export const HelperContext = createContext();

const HelperProvider = () => {
    
    const [showRoute, setShowRoute ] = useState(false)
    
    const providerValue = {
        showRoute,
        setShowRoute
    }
    return <HelperContext.Provider value={providerValue}></HelperContext.Provider>

}
export const useHelper = () => {
    return useContext(HelperContext)
}

export default HelperProvider;