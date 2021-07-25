import React, { useEffect, useState } from 'react'
import "./PreviasStyle.scss"

export default function Previas({image}) { 
  
  const [listFilm, setList] = useState([])
  const listamenor = listFilm.slice(0,10)

  useEffect(() => {
    const getListFromApi = async () => {
      const data = await fetch(`https:/api.tvmaze.com/shows`)
      const response = await data.json()
       console.log(response)
      setList(response)
    }
    setTimeout(() => {
      getListFromApi()
    },[2000])
  }, [])
    
  console.log(listFilm)

  return (
    <div>
      <h3>Prévias</h3>
       <div className="lista-container">
           {listamenor?.map(function (list) {
            return <img className="lista-imagem" src={list.image.original} alt ={list.name} key = {list.id}></img>})}
       </div>

       </div>
  )
}
