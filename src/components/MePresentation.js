import React from "react";
import "../assets/css/Components/MePresentation.scss"


function MePresentation() {
  return (
    <>
    <section className="MePresent-cont">
        <div className="bloque1">
            Foto que todavía no tengo (disculpa las molestias jeje)
            
        </div>
        <div className="bloque2">
            <h1>¿Por qué soy un buen candidato?</h1>
            <div className="check-cont"><input type="checkbox" className="checkbox" checked/><label>No soy un unicornio (todavía) pero siempre estoy aprendiendo y mejorando mis habilidades para ser de los mejores</label></div>
            <div className="check-cont"><input type="checkbox" className="checkbox" checked/><label>Habilidoso para resolver problemas por si solo, si no me crees, preguntale a los 200+ estudiantes que me preguntan dudas a diario</label></div>
            <div className="check-cont"><input type="checkbox" className="checkbox" checked/><label>Quiero ser parte de la construcción de un proyecto del cuál me pueda enamorar</label></div>
            <div className="check-cont"><input type="checkbox" className="checkbox" checked/><label>Gran pensador abstracto que siempre está dispuesto a dar una mano al equipo</label></div>
        </div>
        
    </section>
    
    </>
  );
}

export default MePresentation;
