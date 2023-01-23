// import { Link } from "react-router-dom"
import Structure from "../components/Structure";
import "../assets/css/Screens/PantallaPrincipal.scss";
import foto from "../assets/img/FOTOCV.png";
import LogrosCards from "../components/TrabajoCards";
import MePresentation from "../components/MePresentation";
import MisTecnologias from "../components/MisTecnologias";
import Palabras from "../components/Palabras";
import BloqueAzul from "../components/BloqueAzul";
import Footer from "../components/Footer";
import PorqueYo from "../components/PorqueYo";
import {Link} from "react-router-dom"

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
            <span
              className="btnContact2"
              onClick={() =>
                window.open(
                  "https://wa.me/5491123286036?text=Hola,%20me%20contacto%20desde%20tu%20pagina%20web%20para:")}>
              Contáctame
            </span>
            {window.innerWidth<=770 ?
            <Link to={require("../assets/files/Curriculum-2023.pdf")} className="DwnldMiCV2" target="_blank" download={"CV-EveraldoGuevara.pdf"}>
                    Descarga mi CV
            </Link>
            :
            null}
          </div>
        </article>
        <aside className="foto-PP">
          <img
            src={foto}
            alt="Foto de Everaldo donde sale muy lindo"
            className="Foto"/>
        </aside>
      </div>
      <PorqueYo />
      <section className="logros-cont">
        <h2>Mi Trabajo</h2>
        <LogrosCards />
      </section>
      <MePresentation />
      <MisTecnologias />
      <Palabras />
      <BloqueAzul />
      <Footer />
      <div className="Form-bg"></div>
    </Structure>
  );
}

export default PantallaPrincipal;
