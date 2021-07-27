import React, { useEffect, useState } from 'react'
import { getFilms } from '../../services/filmServices'
import "./KeepWatchingStyle.scss"


export function KeepWatching() {
  const [films, setFilms] = useState([])
  const limitImages = films.slice(0, 10)


  useEffect(() => {
    (async function () {
      const data = await getFilms()
      console.log(data)
      setFilms(data)
    })()

  }, [])

  return (
    <div className="keep-watching-container">
      <h1 className="title-keep">Continuar assistindo como PEDRO</h1>
      <div className="keep-conatiner">
        {limitImages?.map(function (film) {
          return (
            <>
              <div key={film.id}> <img src={film.image.medium} alt={film.name} /> </div>
              <div className="footer-keep"> oii </div>
            </>
          )
        })}
      </div>

    </div>
  )
}
