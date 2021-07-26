import React, { useEffect, useState } from 'react'
import "./PreviasStyle.scss"

export default function Previas({data}) { 

  const [listFilm, setList] = useState([])
  const listamenor = listFilm.slice(10,20)

  useEffect(() => {
    const getListFromApi = async () => {
      const data = await fetch(`https:/api.tvmaze.com/shows`)
      const response = await data.json()
      setList(response)
    }
    setTimeout(() => {
      getListFromApi()
    },[2000])
  }, [])


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
