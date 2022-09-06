import React,{useContext} from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { productsContext } from "../../context/product.context";
import styles from './Shop.module.css'

const Shop = () => {
    const {products} = useContext(productsContext)

    return(
        <div className={styles.container}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
    )
}

export default Shop