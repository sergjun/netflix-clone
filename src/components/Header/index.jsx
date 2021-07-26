import React from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";
import logoNetflix from "../../assets/img/netflix-logo.png";

export function Header() {
  return (
    <header className="navigation">
      <Link exact to='/'>
        <img src={logoNetflix} alt="netflix logo" className="logo"></img>
      </Link>
      <Link exact to='/series' className="text-link">
        Series
      </Link>
      <Link exact to='/filmes' className="text-link">
        Filmes
      </Link>
      <Link exact to='/minha-lista' className="text-link">
        Minha lista
      </Link>
    </header>
  );
}
