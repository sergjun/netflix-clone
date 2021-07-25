import React from 'react'
import playIcon from "../../assets/icons/play-button.png"
import info from "../../assets/icons/info.png"
import mais from "../../assets/icons/plus.png"

import "./MainStyle.scss"
import Previas from '../Previas/Previas'

export default function Main({ film }) {

  const { image, genres } = film;

  return (
    <div className="Main-container">

      <div className="image-container">
        <img src={image?.original} alt="" className="image-fundo" />
      </div>

      <main className='component-main'>
        <section className="gender-section">
          <ul className="genre">{genres?.map(genre => <li key={genre} >{genre}</li>)}</ul>
        </section>


        <section className="button-towatch">
          <div className="plus">
            <img src={mais} alt="plus icon"></img>
            <p>Minha lista</p>
          </div>
          <div className="play">
            <img src={playIcon} alt="play icon"></img>
            <p>Assistir</p>
          </div>
          <div className="info">
            <img src={info} alt="info icon"></img>
            <p>Saiba mais</p>
          </div>
        </section>
      </main>
        <Previas />
    </div>

  )
}
