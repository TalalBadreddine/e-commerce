import { createContext, useReducer } from "react";
import { createAction } from "../Utils/reducers/Reducer.utils";

export const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find((item) => itemToAdd.id === item.id)

    if (existingItem) {
        return cartItems.map((item) => item.id === itemToAdd.id ? { ...item, quantite: item.quantite + 1 } : item)
    }

    return [...cartItems, { ...itemToAdd, quantite: 1 }]
}


export const decrementCartItem = (cartItems, itemToDecrement) => {
    const targetItem = cartItems.find((item) => item.id === itemToDecrement.id)

    if (targetItem.quantite > 1) {
        return cartItems.map((item) => item.id === itemToDecrement.id ? { ...item, quantite: item.quantite - 1 } : item)
    }

    return removeItem(cartItems, itemToDecrement)
}

export const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter((item) => item.id !== itemToRemove.id)
}

export const shoppingBagContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => [],
    cartItemsCount: 0,
    decrementItemInCart: () => [],
})

const CART_ACTION_TYPES = {

    UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
    GET_CART_ITEMS_PRICE: 'GET_CART_ITEMS_PRICE',
    CHANGE_CART_DROPDOWN_STATUS: 'CHANGE_CART_DROPDOWN_STATUS'

}

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {

        case CART_ACTION_TYPES.UPDATE_CART_ITEM:
            return {
                ...state,
                ...payload
            }

        case CART_ACTION_TYPES.CHANGE_CART_DROPDOWN_STATUS:
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }
}

const INITIAL_STATE = {
    cartItems: [],
    cartItemsCount: 0,
    totalPrice: null,
    isCartOpen: false,
}

export const ShoppingBagProvider = ({ children }) => {
    const [{ cartItems, cartItemsCount, totalPrice, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE)


    const updateCartItemsReducer = (items) => {
        const newPrice = items.reduce((total, item) => total + item.quantite * item.price, 0)
        const newTotal = items.reduce((acc, current) => acc + current.quantite, 0)


        dispatch(createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM,{
            cartItems: items,
            totalPrice: newPrice,
            cartItemsCount: newTotal
        } ))

    }


    const addItemToCart = (itemToAdd) => {
        const newSetOfItems = addCartItem(cartItems, itemToAdd)
        updateCartItemsReducer(newSetOfItems)
    }

    const decrementItemInCart = (itemToDecrement) => {
        const newSetOfItems = decrementCartItem(cartItems, itemToDecrement)
        updateCartItemsReducer(newSetOfItems)
    }

    const removeCartItem = (itemToRemove) => {
        const newSetOfItems = removeItem(cartItems, itemToRemove)
        updateCartItemsReducer(newSetOfItems)
    }

    const setIsCartOpen = (status) => {
        dispatch(createAction( CART_ACTION_TYPES.CHANGE_CART_DROPDOWN_STATUS, status ))
    }

    const val = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount, decrementItemInCart, removeCartItem, totalPrice }

    return <shoppingBagContext.Provider value={val}>{children}</shoppingBagContext.Provider>
}