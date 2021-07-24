import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import Main from '../../components/Main/Main'
import MenuBar from '../../components/MenuBar/MenuBar'

function randomFilm (max , min) {
  return Math.round(Math.random() * (max - min) + min)
}

export default function Home() {
  
  const [ film, setFilm ] = useState("")

  useEffect(() => {
    const getFilmFromApi = async () => {
      const data = await fetch(`https:/api.tvmaze.com/shows/${randomFilm(1, 239)}`)
      const response = await data.json()
      // console.log(response)
      setFilm(response)
    }
    getFilmFromApi()
  }, [])

  return (
    <div> 
      <Header />
      <Main film={film}/>
      <MenuBar />
    </div>
  )
}
