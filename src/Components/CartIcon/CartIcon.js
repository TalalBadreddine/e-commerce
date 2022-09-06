import React, { useContext } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shoppingBag.svg'
import style from './CartIcon.module.css'
import { shoppingBagContext } from '../../context/shoppingBag.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(shoppingBagContext)

    return (

        <div className={style.parentContainer}>

            <div className={style.container} onClick={() => setIsCartOpen(!isCartOpen)}>
                <ShoppingBag className={style.icon}></ShoppingBag>
                <span className={style.number}>0</span>
            </div>

            {isCartOpen && <div className={style.dropdownContainer}>
                <div className={style.shoppingBagBox}>

                <button className={style.checkoutBtn}>GO TO CHECKOUT</button>
                </div>
            </div>}

        </div>
    )
}
export default CartIcon