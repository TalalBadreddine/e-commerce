import style from './ProductCard.module.css'

const ProductCard = ({product}) => {
    const {id, name, price, imageUrl} = product
    return(
        <div className={style.container}>
            <div className={style.cardContainer}>
                <img src={imageUrl} className={style.cardImg}></img>
                <h3 className={style.cardBtn}>Add To Card</h3>
            </div>
            <div className={style.cardFooter}>
                <h1 className={style.cardTitle}>{name}</h1>
                <h1 className={style.cardPrice}>{price}$</h1>
            </div>
        </div>
    )
}

export default ProductCard