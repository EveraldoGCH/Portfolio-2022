import React from 'react'
import "../assets/css/Components/MisTecnologias.scss"
import node from "../assets/img/node.png"
import mysql from "../assets/img/mysql.png"
import react from "../assets/img/react.png"
import js from "../assets/img/js.png"
import ts from "../assets/img/ts.png"
import github from "../assets/img/github.png"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"

export default function MisTecnologias() {
  return (
    <section className='MisTecno-cont'>
      <h2>Mis Tecnologías</h2>
      <article className='Tecngs-cont'>
        <div>
          <img src={node} alt={`Node icon`}/>
          <h3>Node.js</h3>
        </div>
        
        <div>
          <img src={react} alt={`Node icon`}/>
          <h3>React & React Native</h3>
        </div>
        
        <div>
          <img src={mysql} alt={`Node icon`}/>
          <h3>MySQL</h3>
        </div>

        <div>
          <img src={js} alt={`Node icon`}/>
          <h3>JavaScript</h3>
        </div>

        <div>
          <img src={github} alt={`Node icon`}/>
          <h3>Github</h3>
        </div>
        
        <div>
          <img src={ts} alt={`Node icon`}/>
          <h3>Typescript</h3>
        </div>
        
        <div>
          <img src={html} alt={`Node icon`}/>
          <h3>HTML</h3>
        </div>

        <div>
          <img src={css} alt={`Node icon`}/>
          <h3>CSS</h3>
        </div>
      </article>
    </section>
  )
}
