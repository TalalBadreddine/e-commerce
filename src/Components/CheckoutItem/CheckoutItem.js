import { useContext } from "react"
import { shoppingBagContext } from "../../context/shoppingBag.context"
import style from './CheckoutItem.module.css'

const CheckoutItem = ({checkoutItem}) => {
    const {imageUrl, name, quantite, price} = checkoutItem
    const {addItemToCart, decrementItemInCart, removeCartItem} = useContext(shoppingBagContext)
    return(
        <div className={style.container}>

            <div>
                <img src={imageUrl} alt={`${name} img`} width='150px' height='70px'></img>
            </div>

            <div>
                <h1>{name}</h1>
            </div>

            <div>
                <span className={style.quantiteContainer}>
                    <button onClick={() => decrementItemInCart(checkoutItem)} className={style.arrow}> &#10094; </button>
                    <h1 className={style.quantite}>{quantite}</h1>
                    <button onClick={() => addItemToCart(checkoutItem)} className={style.arrow}> &#10095; </button>
                </span>
            </div>

            <div>
                <h1>{price}$</h1>
            </div>

            <div className={style.removeBtnContainer}>
                <button onClick={() => removeCartItem(checkoutItem)}>&#10005;</button>
            </div>
        </div>
    )
}
export default CheckoutItem