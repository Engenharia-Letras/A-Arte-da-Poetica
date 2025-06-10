import BotaoAlternativa from "../../components/BotaoAlternativa/BotaoAlternativa";
import CaixaPergunta from "../../components/CaixaPergunta/CaixaPergunta";
import "./PaginaPergunta.css";
import Sair from "../../assets/Sair.png";
import Seta from "../../assets/Seta.png";

const PaginaPergunta = ({ questao }) => {
  return (
    <div className="pagina-pergunta-container">
      <img src={Sair} alt="Ícone para Sair do Jogo" className="icone-sair" />
      <CaixaPergunta pergunta={questao.comando} />
      <div className="alternativas">
        <div className="coluna">
          <BotaoAlternativa alternativa={questao.alternativas[0]} />
          <BotaoAlternativa alternativa={questao.alternativas[1]} />
        </div>
        <div className="coluna coluna-esquerda">
          <BotaoAlternativa alternativa={questao.alternativas[2]} />
          <BotaoAlternativa alternativa={questao.alternativas[3]} />
        </div>
      </div>
      <img
        src={Seta}
        alt="Ícone para Avançar para a Próxima Pergunta"
        className="icone-avancar"
      />
    </div>
  );
};

export default PaginaPergunta;
