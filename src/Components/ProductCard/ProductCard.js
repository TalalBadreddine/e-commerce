import style from './ProductCard.module.css'
import { shoppingBagContext } from '../../context/shoppingBag.context'
import { useContext } from 'react'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const {addItemToCart} = useContext(shoppingBagContext)

    return(
        <div className={style.container}>
            <div className={style.cardContainer}>
                <img src={imageUrl} alt={`${product.name } img`} className={style.cardImg}></img>
                <button className={style.cardBtn} onClick={() => addItemToCart(product)}>Add To Card</button>
            </div>
            <div className={style.cardFooter}>
                <h1 className={style.cardTitle}>{name}</h1>
                <h1 className={style.cardPrice}>{price}$</h1>
            </div>
        </div>
    )
}

export default ProductCard