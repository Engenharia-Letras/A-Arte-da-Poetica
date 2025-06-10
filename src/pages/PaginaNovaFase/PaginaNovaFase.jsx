import "./PaginaNovaFase.css";
import Fada from "../../assets/Fada.png";
import Sair from "../../assets/Sair.png";
import Seta from "../../assets/Seta.png";

const PaginaNovaFase = () => {
  return (
    <div className="pagina-nova-fase-container">
      <img src={Sair} alt="Ícone para Sair do Jogo" className="icone-sair" />
      <span className="quadro-central">
        NOVA FASE
        <img src={Fada} alt="Imagem de uma fada" className="imagem-fada" />
      </span>
      <img
        src={Seta}
        alt="Ícone para Avançar para a Próxima Pergunta"
        className="icone-avancar"
      />
    </div>
  );
};

export default PaginaNovaFase;
