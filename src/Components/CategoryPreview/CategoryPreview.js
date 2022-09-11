import ProductCard from '../ProductCard/ProductCard'
import styles from './CategoryPreview.module.css'
import { Link } from 'react-router-dom'


const CategoryPreview = ({ title, items }) => {
    return (
        <div>
            <Link to={`${title}`} className={styles.containerTitle}>{title}</Link>
            <div className={styles.container}>
                { items && 
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

export default CategoryPreview