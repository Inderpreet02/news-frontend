import React from 'react'
import { options } from '../dummyData'
import './Nav.css'

function Nav({setSearch}) {
  return (
    <div className='nav'>
        {/* <div className="nav__container">
          {
            options && options.map((option) => (

              <div onClick={()=> setSearch(option)} key={option} className="nav__item link">{option}</div>
            ))
          }
        </div> */}

        <select className="nav__containerResponsive" onChange={(e) => setSearch(e.target.value)} >

          {
            options && options.map((op) => (
              <option className='nav__containerResponsiveOption' value={op}>{op}</option>
            ))
          }
        </select>
    </div>
  )
}

export default Nav