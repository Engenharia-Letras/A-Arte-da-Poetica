import BotaoAlternativa from "../../components/BotaoAlternativa/BotaoAlternativa";
import CaixaPergunta from "../../components/CaixaPergunta/CaixaPergunta";
import "./PaginaPergunta.css";
import Sair from "../../assets/Sair.png";
import Seta from "../../assets/Seta.png";
import { useState, useEffect } from "react";

const PaginaPergunta = ({ questao, onAvancar, onFechar }) => {
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);

  useEffect(() => {
    setAlternativaSelecionada(null);
  }, [questao]);

  const handleSelecionarAlternativa = (alternativa) => {
    if (alternativaSelecionada) {
      return;
    }
    setAlternativaSelecionada(alternativa);
  };

  const getStatusBotao = (alternativa) => {
    if (!alternativaSelecionada) {
      return null;
    }

    const isAlternativaCorreta = alternativa === questao.resposta;
    const isAlternativaSelecionada = alternativa === alternativaSelecionada;

    if (isAlternativaCorreta) {
      return "correto";
    }

    if (isAlternativaSelecionada && !isAlternativaCorreta) {
      return "incorreto";
    }

    return null;
  };

  const temResposta = alternativaSelecionada !== null;

  return (
    <div className="pagina-pergunta-container">
      <img
        src={Sair}
        alt="Ícone para Sair do Jogo"
        className="icone-sair"
        onClick={onFechar}
      />
      <CaixaPergunta pergunta={questao.comando} />
      <div className="alternativas">
        <div className="coluna">
          <BotaoAlternativa
            alternativa={questao.alternativas[0]}
            onClick={() => handleSelecionarAlternativa(questao.alternativas[0])}
            status={getStatusBotao(questao.alternativas[0])}
            disabled={temResposta}
          />
          <BotaoAlternativa
            alternativa={questao.alternativas[1]}
            onClick={() => handleSelecionarAlternativa(questao.alternativas[1])}
            status={getStatusBotao(questao.alternativas[1])}
            disabled={temResposta}
          />
        </div>
        <div className="coluna coluna-esquerda">
          <BotaoAlternativa
            alternativa={questao.alternativas[2]}
            onClick={() => handleSelecionarAlternativa(questao.alternativas[2])}
            status={getStatusBotao(questao.alternativas[2])}
            disabled={temResposta}
          />
          <BotaoAlternativa
            alternativa={questao.alternativas[3]}
            onClick={() => handleSelecionarAlternativa(questao.alternativas[3])}
            status={getStatusBotao(questao.alternativas[3])}
            disabled={temResposta}
          />
        </div>
      </div>
      {temResposta && (
        <img
          src={Seta}
          alt="Ícone para Avançar para a Próxima Pergunta"
          className="icone-avancar"
          onClick={onAvancar}
        />
      )}
    </div>
  );
};

export default PaginaPergunta;
