import React from 'react'
import "../assets/css/Components/CardsAboutMe.scss"
import idea from "../assets/img/passion-icon.png"
import diamond from "../assets/img/Diamond_Icon_White.png"
import positive from "../assets/img/positive.png"
import Card from './Card'

function CardsAboutMe() {
  return (
    <div className='CardsAboutMe'>
      <Card
      name={"Passion"}
      img={idea}
      title={"Soluciones simples a problemas no tan simples ..."}
      em={"Me gusta siempre encontrar el camino mas corto a la solucion que parece una carretera infinita"}/>

      <Card name={"Diamond"} 
      img={diamond} 
      title={"Pasión, experiencia y resultados"}
      em={"Trabajo en proyectos en los que confío, donde veo que la idea a elaborar tiene gran potencial y muchos retos por resolver :)"}
      classD={"diamond"}/>

      <Card name={"Diamond"} 
      img={positive} 
      title={"Alguien positivo y pro-activo"}
      em={"Entrego todo mi amor y pasión a la hora de hacer mi deber, sin dejar atrás el compañerismo y las buenas vibras"}/>   
    </div>
  )
}

export default CardsAboutMe