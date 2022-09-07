import React, { useContext } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shoppingBag.svg'
import style from './CartIcon.module.css'
import { shoppingBagContext } from '../../context/shoppingBag.context';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const navigate = useNavigate()
    const { isCartOpen, setIsCartOpen, cartItems, cartItemsCount } = useContext(shoppingBagContext)

    return (

        <div className={style.parentContainer}>

            <div className={style.container} onClick={() => setIsCartOpen(!isCartOpen)}>
                <ShoppingBag className={style.icon}></ShoppingBag>
                <span className={style.number}>{cartItemsCount}</span>
            </div>

            {
            isCartOpen && 

            <div className={style.dropdownContainer}>
                <div className={style.shoppingBagBox}>
                    {cartItems.length > 0 ?
                     cartItems.map((item) => {
                        return(
                            <CartItem cartItem={item} key={item.id}></CartItem>
                        )
                     })
                     : 'Cart is Empty'}
                </div>
                <button className={style.checkoutBtn} onClick={() => navigate('Checkout')}>GO TO CHECKOUT</button>

            </div>}

        </div>
    )
}
export default CartIcon