import React from 'react'
import "../assets/css/Components/Palabras.scss"
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
                    <p className='offsetText'>"Es una persona muy motivada, que aprende rápido y no le tiene miedo a los desafíos. Además de sus capacidades técnicas, también es alguien en quien se puede confiar para pertenecer a un equipo y dar lo mejor de si mismo. Todo el que decida contratarlo, está tomando a una persona honesta y resolutiva" :)</p>
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
        <div className="Form3-bg"></div>
    </section>
  )
}
