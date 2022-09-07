import { useEffect, useState } from "react";
import { createContext } from "react";

export const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find((item) => itemToAdd.id === item.id)

    if(existingItem){
        return cartItems.map((item) => item.id === itemToAdd.id ? { ...item, quantite: item.quantite + 1 } : item)
    }
    
    return [...cartItems, {...itemToAdd, quantite: 1}]
}


export const shoppingBagContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => [],
    cartItemsCount: 0
})

export const ShoppingBagProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState()
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const addItemToCart = (itemToAdd) => {
        setCartItems(addCartItem(cartItems, itemToAdd))
    }

    useEffect(() => {

        setCartItemsCount(cartItems.reduce((total, currentItem) => 
            total + currentItem.quantite
        ,0) )

    },[cartItems])

    const val = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount}

    return <shoppingBagContext.Provider value={val}>{children}</shoppingBagContext.Provider>
}