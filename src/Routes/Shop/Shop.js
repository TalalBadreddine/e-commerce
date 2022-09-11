import React from "react";
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from "../Categories-Preview/CategoriesPreview";
import Category from "../Category/Category";

const Shop = () => {

    return (
            <Routes>
                <Route index element={<CategoriesPreview/>}></Route>
                <Route path=':category' element={<Category></Category>}></Route>
            </Routes>
    )
}

export default Shop