import React from 'react'
import "../assets/css/Components/Structure.scss"
import { Link } from "react-router-dom"


function Header() {
  return (
    <header>
        <h1 className='tuEmpresa'>
            <span className='span1'>
                Tu empresa
            </span>
            <span className='span2'>
                +
            </span>
            <span className='span3'>
                Everaldo.
            </span>
        </h1>
        <div className='BtnsHeader'>
            <Link to={require("../assets/files/Curriculum-2023.pdf")} className="DwnldMiCV" target="_blank" download={"CV-EveraldoGuevara.pdf"}>
                    Descarga mi CV
            </Link>
            <span className='btnContact' onClick={()=>window.open("https://wa.me/5491123286036?text=Hola,%20me%20contacto%20desde%20tu%20portafolio%20para:")}>Contáctame</span>
        </div>
    </header>
  )
}

export default Header