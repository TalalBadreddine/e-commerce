import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import PRODUCTS from '../products.json'

export const productsContext = createContext({
    products: null,
    setProducts: () => null
})

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS)
    const val = {products, setProducts}

    return <productsContext.Provider value={val}>{children}</productsContext.Provider>
}