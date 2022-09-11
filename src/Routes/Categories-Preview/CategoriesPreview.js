import React, { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) =>
                <CategoryPreview title={title} items={categoriesMap[title]} key={title} ></CategoryPreview>
                )
            }
        </Fragment>
    )
}

export default CategoriesPreview