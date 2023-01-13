import React from "react";
import "../assets/css/Components/TrabajoCards.scss";
import idea from "../assets/img/emoji-happy.png";
import CM from "../assets/img/favicon-construmall.webp";
import metamask from "../assets/img/metamask-1.svg";
import profesor from "../assets/img/DHLOGO.avif"
import catgif from "../assets/img/catgif.gif"
import Card2 from "./Card2";

function TrabajoCards() {
  return (
    <div className="TrabajoCards">
      <Card2
        name={"Black and White"}
        img={idea}
        title={"TÚ"}
        em={
          "Mi próximo reto es ser parte de tu empresa, y ser un trabajador de gran valor"}
        classD={"first"}
      />

      <Card2
        name={"Diamond"}
        img={CM}
        title={"ConstruMALL"}
        em={
          "Trabajé por 11 meses en un e-commerce de construcción de Bolivia, con tecnologías como React, Node.Js, MySQL, etc, dónde aprendí sobre desarrollo para comercios digitales"}
      />

      <Card2
        name={"Diamond"}
        img={metamask}
        title={"Desarrollo Web3"}
        em={"Desarrollé un challenge con Next.js 13, el que al entrar debías conectar tu cartera de MetaMask, mostrar direccion y balance, y realizar una encuesta que enviaba los resultados a la Web3"}
      />

      <Card2
        name={"Diamond"}
        img={profesor}
        title={"Profesor de programación 1, 2, y 3"}
        em={"Enseñamos HTML, CSS, JavaScript, MySQL, Node, React, React Native a los estudiantes de la Licenc. en Negocios Digitales en la Universidad de San Andrés"}
        classD={"dh"}
      />

      <Card2
        name={"Diamond"}
        img={catgif}
        title={"Freelance"}
        em={"He manejado clientes y empresas como freelancer con buena actitud y gran carisma. To the moon!!!!"}
      />

    </div>
  );
}

export default TrabajoCards;
