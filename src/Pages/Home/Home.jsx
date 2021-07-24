import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import Main from '../../components/Main/Main'

function RandomFilm (max , min) {

  
  // console.log(Math.round(Math.random() * (max - min) + min))
  return Math.round(Math.random() * (max - min) + min)
 
}



export default function Home() {
  
  const [ film, setFilm ] = useState("")

  useEffect(() => {
    const getFilmFromApi = async () => {
      const data = await fetch(`https:/api.tvmaze.com/shows/${RandomFilm(1, 239)}`)
      const response = await data.json()
      // console.log(response)
      setFilm(response)
    }
    getFilmFromApi()
  }, [])

  

  return (
    <div> 
      <Header />
      <Main 
        film={film}
      />
    </div>
  )
}
