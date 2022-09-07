import { useEffect, useState } from "react";
import { createContext } from "react";

export const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find((item) => itemToAdd.id === item.id)

    if(existingItem){
        return cartItems.map((item) => item.id === itemToAdd.id ? { ...item, quantite: item.quantite + 1 } : item)
    }
    
    return [...cartItems, {...itemToAdd, quantite: 1}]
}


export const decrementCartItem = (cartItems, itemToDecrement) => {
    const targetItem = cartItems.find((item) => item.id === itemToDecrement.id )

    if(targetItem.quantite > 1){
        return cartItems.map((item) => item.id === itemToDecrement.id ? {...item, quantite: item.quantite - 1} : item)
    }

    return removeItem(cartItems, itemToDecrement)
}

export const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter((item) => item.id !==itemToRemove.id)
}

export const shoppingBagContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => [],
    cartItemsCount: 0,
    decrementItemInCart: () => [],
})

export const ShoppingBagProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState()
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = (itemToAdd) => {
        setCartItems(addCartItem(cartItems, itemToAdd))
    }

    const decrementItemInCart = (itemToDecrement) => {
        setCartItems(decrementCartItem(cartItems, itemToDecrement))
    }

    const removeCartItem = (itemToRemove) => {
        setCartItems(removeItem(cartItems, itemToRemove))
    }

    useEffect(() => {

        setCartItemsCount(cartItems.reduce((total, currentItem) => 
            total + currentItem.quantite
        ,0) )

        setTotalPrice(cartItems.reduce((total, currentItem) => total + currentItem.quantite * currentItem.price ,0))

    },[cartItems])


    const val = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount, decrementItemInCart, removeCartItem, totalPrice}

    return <shoppingBagContext.Provider value={val}>{children}</shoppingBagContext.Provider>
}