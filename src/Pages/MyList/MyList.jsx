import React from "react";
import './MyListStyle.scss'
import back from "../../assets/img/proximo.png"
import search from "../../assets/icons/search.svg"


export function MyList() {
  return (
    <>
    <header>
      <img src={back} alt="" />

      <h3>Minhas listas</h3>
    </header>
    <div className="list-container">
      <input type="text" placeholder="Procure entre listas" />
      <img className ="search" src={search} alt="" />
          <section className="main-list">
            <div className="Add-Film">
              <p className="plus-icon">+</p>

            </div>
               <p className ="list-item">
                Criar lista
               </p>

          </section>
    </div>
    </>
  )
}
