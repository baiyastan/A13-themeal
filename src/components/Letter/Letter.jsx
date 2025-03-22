import React from 'react'
import "./Letter.css"
import { letter } from '../../data/alfa'
import { Link } from 'react-router-dom'

function Letter() {
  return (
    <div>
      {
        letter.map((item) => (
            <Link>{item}</Link>
        ))
      }
    </div>
  )
}

export default Letter
