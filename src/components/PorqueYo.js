import React from 'react'
import CardsAboutMe from './CardsAboutMe'
import emoji from "../assets/img/emoji.png"
import "../assets/css/Components/PorqueYo.scss"

export default function PorqueYo() {
  return (
    <section className="cards-cont">
        <div className="pero-cont">
            <h2>Pero... ¿Por qué yo?</h2>
            <img src={emoji} className="emoji" alt="emoji"/>
        </div>
        <CardsAboutMe/>
    </section>
  )
}
