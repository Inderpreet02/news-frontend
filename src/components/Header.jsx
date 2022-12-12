import React, { useState } from 'react'
import './Header.css'
import { BiSearch } from "react-icons/bi"
import { FaAndroid, FaApple } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}`)
    }
  return (
    <div className="header">
        <div className="header__container">
            <div className="header__left">
                <BiSearch className='header__iconColor header__searchIcon'/>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="header__input" placeholder='Search....' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </div>

            <div className="header__center">
                <Link to="/NDTV/latest" className="header__secondary link">NDTV</Link>
                <Link to="/" className="header__main link">Pew News</Link>
                <Link to="/IndiaToday/india" className="header__secondary link">IndiaToday</Link>
            </div>

            <div className="header__right header__iconColor header__icon">
                <FaAndroid className='header__iconAndroid header__icon'/>
                <FaApple className='header__iconApple header__icon'/>
                <div className="header__getApp header__icon">
                    Download App
                </div>
                <BsArrowRight className='header__icon header__iconArrow'/>
            </div>
        </div>
    </div>
  )
}

export default Header