import React from 'react';
import {ReactComponent as ShoppingBag} from '../../assets/shoppingBag.svg'
import style from './CartIcon.module.css'

const CartIcon = () => {
    return(
        <div className={style.container}> 
        <ShoppingBag className={style.icon}></ShoppingBag>
        <span className={style.number}>0</span>
        </div>
    )
}
export default CartIcon