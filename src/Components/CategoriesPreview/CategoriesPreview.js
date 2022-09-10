import ProductCard from '../ProductCard/ProductCard'
import styles from './CategoriesPreview.module.css'


const CategoriesPreview = ({ title, items }) => {
    return (
        <div>
            <h1 className={styles.containerTitle}>{title}</h1>
            <div className={styles.container}>
                {
                    items.filter((_, index) => index < 4).map((product) => {
                        return(
                            <ProductCard key={product.id} product={product}></ProductCard>
                        )
                })
                }
            </div>
        </div>
    )
}

export default CategoriesPreview