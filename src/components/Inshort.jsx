import React from 'react'
import './Inshort.css'

const Inshort = ({news}) => {
  return (
    <div className='short'>
        <div className="short__container">
            <div className="short__left">
                <img src={news.imageURL} alt={news.imageURL} />
            </div>
            <div className="short__right">
                <a href={`${news.redirectURL}`} target="_black" className="short__title">
                    {news.name}
                </a>
                <div className="short__author">
                    By: {news.author}
                </div>
                <div className="short__content">
                    {news.content}
                </div>

                <div className="short__date">
                    {news.date}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inshort