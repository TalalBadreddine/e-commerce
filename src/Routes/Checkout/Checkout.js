import React, { useContext } from "react";
import { shoppingBagContext } from "../../context/shoppingBag.context.jsx";
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import style from './Checkout.module.css'

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(shoppingBagContext)

    return (

        <div className={style.container}>


            <div className={style.headers} >
                {['Product', 'Description', 'Quantite', 'Price', 'Remove'].map((header) =>
                    <div key={header}>
                        <h1>{header}</h1>
                    </div>
                )}
            </div>

            <div className={style.cartItemsContainer}>

                {cartItems && cartItems.map((item) =>
                    <CheckoutItem checkoutItem={item} key={item.id}></CheckoutItem>
                )}

            </div>

            {cartItems.length > 0 && <div className={style.totalContainer}>
                <h1>TOTAL:</h1>
                <h1>{totalPrice}$</h1>
            </div>}

        </div>
    )
}

export default Checkout