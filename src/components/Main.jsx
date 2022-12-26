import React from 'react'
import Inshort from './Inshort';
import './Main.css'

const Main = ({ data, search }) => {
  return (
    <div className='main'>
        <div className="main__container">
          <h1 className="main__title">
            {search}
          </h1>
          {
            data.map((item, __i__) => (
              <Inshort key={__i__} title={item.name} news={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default Main