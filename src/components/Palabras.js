import React from 'react'
import "../assets/css/Components/Palabras.scss"
import profesor from "../assets/img/prof.png"
import mariana from "../assets/img/mariana.jpeg"
import hernan from "../assets/img/hernan.jpeg"

export default function Palabras() {
  return (
    <section className='Palabras-cont'>
        <h2>Palabras de gente asombrosa:</h2>
        <div className='PalabrasPersonas'>
            <article>
                <div className='PhotoPersona'>
                    <img src={mariana} alt="PROFE"/>
                </div>
                <div className='PhrasePersona-cont'>
                <p className='offsetText'>Amo a mi hermano porque es el mejor del mundo y me ama demasiado</p>
                    <p className='offsetName'>Mariana Guevara</p>
                    <p className='offsetProffession'>Analista de Marketing @ Growth Hack Studio</p>
                    <p className='offsetProffession'>Lic. en comunicación social</p>
                </div>
            </article>

            <article>
                <div className='PhotoPersona'>
                    <img src={hernan} alt="PROFE"/>
                </div>
                <div className='PhrasePersona-cont'>
                    <p className='offsetText'>Amo a mi cuñado porque es el mejor del mundo y me ama demasidio</p>
                    <p className='offsetName'>Hernán F. Baravalle</p>
                    <p className='offsetProffession'>Full Stack Lead Instructor @ Hack Academy</p>
                    <p className='offsetProffession'>Desarrollador Front-end</p>
                </div>
            </article>
        </div>
    </section>
  )
}
