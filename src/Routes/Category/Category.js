import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoriesContext } from "../../context/categories.context"
import style from './Category.module.css'


const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div>
            {products &&
            <div>
                <h1 className={style.title}>{category}</h1>
                <div className={style.container}>
                    {products.map((item) => <ProductCard product={item}></ProductCard>)}
                </div>
            </div>
            }
        </div>

    )
};

export default Category