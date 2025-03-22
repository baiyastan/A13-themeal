import React from 'react'
import "./List.css"
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div className='container list'>
        {
            data.map((item) => (
                <Card key={item.idMeal} card={item}/>
            ))
        }
    </div>
  )
}

export default ProductList
