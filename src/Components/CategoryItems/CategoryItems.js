import React from "react";
import styles from './CategoryItemsCss.module.css'
import { useNavigate } from "react-router";

const CategoryItems = ({ category }) => {
    const navigate = useNavigate()
    const { imageUrl, title } = category

    return (
                <div className={["mx-auto my-20 ", styles.containerS].join('')} onClick={() => {navigate(`/shop/${title.toLowerCase()}`)}}>
                     <img src={imageUrl} alt="" className={["w-full h-full ", styles.img].join(' ')} width='450px' height='300px' />
                    <p className={["float-left absolute text-5xl text-white  font-mono ", styles.containersTitle].join(' ')}>{title}</p>
                </div>
)}

export default CategoryItems