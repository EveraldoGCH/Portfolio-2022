import React from 'react'
import "../assets/css/Components/Footer.scss"

export default function Footer() {
  return (
    <section className='Footer-cont'>
        <div className='text-cont'>
            <article>
                <p className='p1'>Corta historia</p>
                <p className='p2'>Hola! soy Everaldo, un programador full-stack de 22 años que viene de Valencia, Venezuela. Actualmente resido en Buenos Aires, Argentina. Me gusta el ciclismo, los memes (malos) y codear.</p>
            </article>
            <article>
                <p className='p2 center'>Gracias por haber llegado hasta acá, si estás leyendo esto, eres un/x crack y espero te haya gustado mucho, ojalá nos podamos comunicar pronto</p>
            </article>
            <article>
                <p className='p1'>Contacto</p>
                <a className='correo' href='mailto:everaldoguevara@gmail.com'>Correo</a>
                <br/>
                <a href='https://www.linkedin.com/in/everaldoguevara/' target="blank">LinkedIn</a>
                <br/>
                <a href='https://github.com/EveraldoGCH' target="blank">GitHub</a>


            </article>
        </div>
        <div className='copyright p1'>
            <p>2023 by Everaldo Guevara - Built with react</p>
        </div>
    </section>
  )
}
