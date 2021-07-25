import React, { useEffect, useState } from 'react'
import "./PreviasStyle.scss"




export default function Previas() {
  
  const [listFilm, setList] = useState([])
  useEffect(() => {
    const getListFromApi = async () => {
      const data = await fetch(`https:/api.tvmaze.com/shows`)
      const response = await data.json()
       console.log(response)
      setList(response)
    }
    getListFromApi()
  }, [])
    
  const listamenor = listFilm.slice(0,10)

  console.log(listFilm)

  return (
    <div>
      <h3>Prévias</h3>
       <div className="lista-container">
         
           {listamenor?.map(function (list) {
            return <img className="lista-imagem" src={list.image.original} alt ={list.name} key = {list.id}></img> 
           
          })}
         
       </div>

       </div>
  )
}
