import React from 'react'
import "../assets/css/Components/CardsAboutMe.scss"

function Card({img, name, title, em, classD}) {
  return (
    <article>
            <div className='card-icon-cont'>
              <img src={img} alt={`${name} icon`} className={classD || ""}/>
            </div>
            <h3>{title}</h3>
            
            <em>{em}</em>
    </article> 
  )
}

export default Card