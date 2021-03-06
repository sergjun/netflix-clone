import React, { useEffect, useState } from 'react'
import { Header, Main } from '../../components/index'
import { getFilmById } from '../../services/filmServices'
import { randomId } from '../../utils/randomId';
import "./HomeStyle.scss";

export function Home() {
  const [ film, setFilm ] = useState("")

  useEffect(() => {
    (async function () {
      const id = randomId(1,239)
      const data = await getFilmById(id)
      setFilm(data)
    })()
  }, [])

  return (
    <>
    <Header />
    <Main film={film}/>
    </>
  )
}
