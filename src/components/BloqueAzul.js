import React from 'react'
import "../assets/css/Components/BloqueAzul.scss"

export default function BloqueAzul() {
  return (
    <section className='bloqueAzul'>
        <span>Gracias por tu tiempo</span>
        <p>Y déjame saber si puedo empacar mis cosas!</p>
        <button className='btn' 
        onClick={()=>window.open("https://wa.me/5491123286036?text=Hola,%20me%20contacto%20desde%20tu%20pagina%20web%20para:")}>
        Envíame un mensaje
        </button>
        <div className='Form-degradada'></div>
    </section>
  )
}
