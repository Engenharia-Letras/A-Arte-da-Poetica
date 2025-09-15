import "./PaginaLivro.css";
import imagemLivro from "../../assets/livro_aberto.png";
import Sair from "../../assets/Sair.png";
import Seta from "../../assets/Seta.png";

const PaginaLivro = ({ texto, onFechar, onProximo }) => {
  return (
    <div className="pagina-livro-fundo">
      <img
        src={Sair}
        alt="Ícone para Sair"
        className="icone-sair"
        onClick={onFechar}
      />

      <div className="livro-container">
        <img
          src={imagemLivro}
          alt="Ilustração de um livro aberto"
          className="livro-imagem"
        />
        <div className="livro-texto">
          <p>{texto}</p>
        </div>
      </div>

      <img
        src={Seta}
        alt="Ícone para Avançar"
        className="icone-avancar"
        onClick={onProximo}
      />
    </div>
  );
};

export default PaginaLivro;
