import React, { useEffect, useState } from 'react'
import { getFilms } from '../../services/filmServices'
import { infoIcon } from "../../assets/icons/index"
import "./KeepWatchingStyle.scss"



export function KeepWatching() {
  const [films, setFilms] = useState([])
  const limitImages = films.slice(20, 30)


  useEffect(() => {
    (async function () {
      const data = await getFilms()
      console.log(data)
      setFilms(data)
    })()

  }, [])


  return (
    <>
      <h1 className="title-keep">Continuar assistindo como PEDRO</h1>

      <div className="keep-watching-container">
        {limitImages?.map(function (film) {
          return (
            <>
              <div id={film.id} className="keep-conatiner" >
                <img src={film.image.medium} alt={film.name} className="image__keep--item" />
                <div className="footer-keep">
                  <p> { `${film.runtime}m` } </p>
                  <img src={infoIcon} className="icon__keep--info" alt="ajuda/descrição"/>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
