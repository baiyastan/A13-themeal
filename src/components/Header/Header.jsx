import React, {useState} from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [text, setText] = useState("")
  const namigate = useNavigate()

  function handleKeyDown (e) {
    if(e.keyCode == 13) {
      namigate(`/search/${text}`)
      setText("")
    }
  }

  return (
    <div className='header container'>
      <img src="https://www.themealdb.com/images/logo.svg" alt="" />
      <div className='header-right'>
        <Link to="/" className='home-btn'>HOME</Link>
        <Link className='api-btn'>API</Link>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          type="text"
          onKeyDown={handleKeyDown}
         />
      </div>
    </div>
  )
}

export default Header
