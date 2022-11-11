// import { Link } from "react-router-dom"
import Structure from "../components/Structure"
import "../assets/css/PantallaPrincipal.scss"
import foto from "../assets/img/FOTOCV.png"


function PantallaPrincipal() {
  return (
        <Structure>
            <div className="cont-PantallaPrincipal">
                <section className="titulos-PP">
                    <h2>Hola!</h2>
                    <h2><span className="tu-PP">Soy</span> Everaldo,</h2>
                    <h2>y quiero unirme a <span className="tu-PP">tu</span> equipo</h2>
                </section>
                <aside className="foto-PP">
                    <div className="cont-Foto"></div>
                    <img src={foto} alt="Foto de Everaldo muy fachera" className="Foto"/>
                </aside>
            </div>
        </Structure>
  )
}

export default PantallaPrincipal