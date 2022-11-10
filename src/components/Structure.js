import React from 'react'
import "../assets/css/Structure.scss"
import Header from "./Header"

function Structure({children}) {
  return (
    <div className="cont-PantallaPrincipal">
            <Header/>
            {children}
    </div>
  )
}

export default Structure