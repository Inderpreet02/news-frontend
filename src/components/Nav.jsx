import React from 'react'
import { options } from '../dummyData'
import './Nav.css'

function Nav({setSearch}) {
  return (
    <div className='nav'>
        <div className="nav__container">
          {
            options && options.map((option) => (

              <div onClick={()=> setSearch(option)} key={option} className="nav__item link">{option}</div>
            ))
          }
        </div>
    </div>
  )
}

export default Nav