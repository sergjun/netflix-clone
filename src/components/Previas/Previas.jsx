import React, { useEffect, useState } from "react";
import { getFilms } from "../../services/filmServices";
import "./PreviasStyle.scss";

export function Previas({ data }) {
  const [listFilm, setList] = useState([]);
  const listamenor = listFilm.slice(10, 20);

  useEffect(() => {
    (async function () {
      const data = await getFilms()
      setList(data);
    })();
  
  }, []);

  return (
    <div>
      <h3>Prévias</h3>
      <div className="lista-container">
        {listamenor?.map(function (list) {
          return (
            <img
              className="lista-imagem"
              src={list.image.original}
              alt={list.name}
              key={list.id}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
