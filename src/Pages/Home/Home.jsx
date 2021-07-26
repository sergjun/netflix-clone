import React, { useEffect, useState } from 'react'
import { Header, MenuBar, Main } from '../../components/index'
import { getFilmById } from '../../services/filmServices'
import { randomId } from '../../utils/randomId'

export default function Home() {
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
      <MenuBar />
    </>
  )
}
