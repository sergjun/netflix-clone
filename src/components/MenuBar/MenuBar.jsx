import React from 'react'
import { homeIcon, searchIcon , playGroup, downloadIcon, menuIcon } from '../../assets/icons'
import "./MenuStyle.scss"

export function MenuBar() {
  return (
    <div className="menu-container">

      <div className="item-menu">
        <img src={homeIcon} alt="" className="image-item" />
        <p className="text-item-selecionado"> Inicio </p>
      </div>

      <div className="item-menu">
        <img src={searchIcon} alt="" className="image-item" />
        <p  className="text-item" > Buscar </p>
      </div>

      <div className="item-menu" >
        <img src={playGroup} alt="" className="image-item"/>
        <p className="text-item" > Em breve </p>
      </div>

      <div className="item-menu" >
        <img src={downloadIcon} alt="" className="image-item" />
        <p className="text-item" > Downloads </p>
      </div>

      <div className="item-menu" >
        <img src={menuIcon} alt=""  className="image-item"/>
        <p  className="text-item"  > Mais </p>
      </div>

    </div>
  )
}
