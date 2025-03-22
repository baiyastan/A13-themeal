import React from 'react'
import "./Banner.css"
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='banner container'>
            <div className='banner-top'>
                <img src="" alt="" />
                <div className='banner-content'>
                    <h1>Welcome to TheMealDB </h1>
                    <p>
                        Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.
                        We offer a <Link> free recipe API</Link>  for anyone wanting to use it, with additional premium features if required.
                    </p>
                    <div className='banner-btn'>
                        <button>Free API</button>
                        <button>Go Premium</button>
                    </div>
                    <p>Click above to upgrade the free Recipe API to premium for <Link> $10 lifetime one-off</Link>
                    Currently 93 supporters.</p>
                </div>
                <img src="" alt="" />
            </div>
            <div className='banner-search'>
                <input type="text" />
                <div className='search-content'>
                    <b>Total Meals</b>
                </div> 
            </div>
        </div>
    )
}

export default Banner
