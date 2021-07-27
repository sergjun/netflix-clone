import React from "react";
import './MyListStyle.scss'
import back from "../../assets/img/proximo.png"
import search from "../../assets/icons/search.svg"


export function MyList() {
  return (
    <>
      <header className="header-component">
        <img src={back} alt="" className="header__icon--back" />

        <h3 className="header__text--title">Minhas listas</h3>
      </header>

      <div className="list-container">

        <input type="text" placeholder="Procure entre listas" className="header__search--input" />

        <img className="header__search--icon" src={search} alt="" />

        <section className="main-list">

          <div className="Add-Film">
            <p className="plus-icon">+</p>
          </div>

          <p className="list-item"> Criar lista </p>
        </section>
      </div>
    </>
  )
}
