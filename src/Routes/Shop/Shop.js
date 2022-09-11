import React from "react";
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from "../Categories-Preview/CategoriesPreview";

const Shop = () => {

    return (
            <Routes>
                <Route index element={<CategoriesPreview/>}></Route>
            </Routes>
    )
}

export default Shop