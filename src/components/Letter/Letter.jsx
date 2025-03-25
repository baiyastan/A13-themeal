import React from 'react'
import "./Letter.css"
import { letter } from '../../data/alfa'
import { Link } from 'react-router-dom'

function Letter() {
  return (
    <div className='letter container'>
      {
        letter.map((item, index) => (
            <p key={index}><Link to={`/letter/${item}`}>{item}</Link> /</p>
        ))
      }
    </div>
  )
}

export default Letter
