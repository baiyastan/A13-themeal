import React from 'react'
import "./Country.css"
import { flags } from '../../data/alfa'
import { Link } from 'react-router-dom'

const API = "https://www.themealdb.com/images/icons/flags/big/64"
function Country() {
  return (
    <div className='flags container'>
      {
        flags.map((item, index) => (
            <Link key={index} to={`/area/${item.str}`}>
                <img src={`${API}/${item.img}.png`} alt="" />
            </Link>
        ))
      }
    </div>
  )
}

export default Country
