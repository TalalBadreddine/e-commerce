import React from "react";
import './CategoryItemsCss.css'

const CategoryItems = ({ category }) => {

    const { imageUrl, title } = category

    return (
                <div className="containerS mx-auto my-20">
                     <img src={imageUrl} alt="" className="w-full h-full" width='450px' height='300px' />
                    <p className="float-left absolute text-5xl text-white containersTitle font-mono ">{title}</p>
                </div>
)}

export default CategoryItems