import "./PaginaInicial.css";
import Play from "../../assets/Play.png";
import Castelo from "../../assets/Castelo.png";

const PaginaInicial = ({ onPlay }) => {
  return (
    <div className="pagina-inicial">
      <h1>A ARTE DA<br/>POÉTICA</h1>

      <div className="play-container">
        <img
          src={Play}
          alt="Botão de iniciar"
          className="play-imagem"
          onClick={onPlay}
        />
      </div>

      <img
        src={Castelo}
        alt="Imagem de um castelo"
        className="icone-castelo"
      />
    </div>
  );
};

export default PaginaInicial;
