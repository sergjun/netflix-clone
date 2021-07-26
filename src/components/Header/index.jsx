import "./styles.scss";
import logoNetflix from "../../assets/img/netflix-logo.png";

export function Header() {
  return (
    <header>
      <img src={logoNetflix} alt="netflix logo"></img>
      <p>Series</p>
      <p>Filmes</p>
      <p>Minha lista</p>
    </header>
  );
}
