import { useState } from "react";
import { createContext } from "react";

export const shoppingBagContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null
})

export const ShoppingBagProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState()
    const val = {isCartOpen, setIsCartOpen}

    return <shoppingBagContext.Provider value={val}>{children}</shoppingBagContext.Provider>
}