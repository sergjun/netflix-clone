import React from 'react'
import "./MainStyle.scss"


export default function Main({ film }) {

  const { image } = film

  return (
    <div className="Main-container">
      <img src={image && image.original} alt="" className="image-fundo" />

      <div className="">

        <section className="button-towatch">
          <p>Assistir</p>
          <img src="" alt="" />
        </section>
        
      </div>

    </div>

  )
}
