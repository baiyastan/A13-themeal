import React from 'react'
import "./Card.css"

function Card({card}) {
    return (
        <div className="foot">
            <img src={card.strMealThumb} alt="" />
            <p>{card.strMeal}</p>
        </div>
    )
}

export default Card
