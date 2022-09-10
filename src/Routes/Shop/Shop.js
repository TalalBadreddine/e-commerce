import React, { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoriesPreview from "../../Components/CategoriesPreview/CategoriesPreview";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) =>
                <CategoriesPreview title={title} items={categoriesMap[title]}></CategoriesPreview>
                )
            }



        </Fragment>
    )
}

export default Shop