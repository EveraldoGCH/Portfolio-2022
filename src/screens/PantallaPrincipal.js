// import { Link } from "react-router-dom"
import Structure from "../components/Structure"
import "../assets/css/Screens/PantallaPrincipal.scss"
import foto from "../assets/img/FOTOCV.png"
import emoji from "../assets/img/emoji.png"
import CardsAboutMe from "../components/CardsAboutMe"
import LogrosCards from "../components/TrabajoCards"
import MePresentation from "../components/MePresentation"
import MisTecnologias from "../components/MisTecnologias"
import Palabras from "../components/Palabras"


function PantallaPrincipal() {
  return (
        <Structure>
            <div className="cont-PantallaPrincipal">
                <article className="titulos-PP">
                    <div className="cont-Titulos">
                        <h2>Hola!</h2>
                        <h2><span className="tu-PP">Soy</span> Everaldo,</h2>
                        <h2>y quiero unirme a <span className="tu-PP">tu</span> equipo</h2>
                    </div>
                    <div className="BtnsContactCont">
                        <span className='btnContact' onClick={()=>window.open("https://wa.me/5491123286036?text=Hola,%20me%20contacto%20desde%20tu%20pagina%20web%20para:")}>Contáctame</span>
                    </div>
                </article>
                <aside className="foto-PP">
                    <div className="cont-Foto"></div>
                    <img src={foto} alt="Foto de Everaldo donde sale muy lindo" className="Foto"/>
                </aside>
                <section className="cards-cont">
                    <div className="pero-cont">
                        <h2>Pero... ¿Por qué yo?</h2>
                        <img src={emoji} className="emoji" alt="emoji"/>
                    </div>
                    <CardsAboutMe/>
                </section>
                <section className="logros-cont">
                    <h2>Mi Trabajo</h2>
                    <LogrosCards/>
                </section>
                <MePresentation/>
                <MisTecnologias/>
                <Palabras/>
                <div className="Form-bg"></div>
                <div className="Form3-bg"></div>
            </div>
        </Structure>
  )
}

export default PantallaPrincipal