import React from 'react'
import homeIcon from "../../assets/icons/home.svg"
import searchIcon from "../../assets/icons/search.svg"
import playGroup from "../../assets/icons/playGroup.svg"
import download from "../../assets/icons/download.svg"
import menu from "../../assets/icons/menu.svg"
import "./MenuStyle.scss"

export default function MenuBar() {
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
        <img src={download} alt="" className="image-item" />
        <p className="text-item" > Downloads </p>
      </div>

      <div className="item-menu" >
        <img src={menu} alt=""  className="image-item"/>
        <p  className="text-item"  > Mais </p>
      </div>

    </div>
  )
}
