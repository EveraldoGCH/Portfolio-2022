import React from 'react'
import "../assets/css/Structure.scss"
import Header from "./Header"

function Structure({children}) {
  return (
    <div className="cont-Structure">
            <Header/>
            {children}
    </div>
  )
}

export default Structure