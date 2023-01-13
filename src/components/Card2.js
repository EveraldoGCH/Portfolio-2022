import React from 'react'
import "../assets/css/Components/Cards2.scss"

function Card2({img, name, title, em, classD}) {
  return (
    <article className={`Card2 ${classD}` || "Card2"}>
            <div className='card-icon-cont'>
              <img src={img} alt={`${name} icon`}/>
            </div>
            <h3>{title}</h3>
            <br/>
            <em>{em}</em>
    </article> 
  )
}

export default Card2