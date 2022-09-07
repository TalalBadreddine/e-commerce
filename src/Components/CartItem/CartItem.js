import style from './CartItem.module.css'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, quantite,price} = cartItem
    return(
        <div className={style.container}>
            <img src={imageUrl} alt={`${name} img`} width='60px' height={'60px'}></img>
            <div>
                <h1>{name}</h1>
                <div>
                    <h1>{quantite} X ${price}</h1>
                </div>
            </div>
        </div>
    )
}

export default CartItem