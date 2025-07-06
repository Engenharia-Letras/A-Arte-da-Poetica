import "./App.css";
import PaginaPergunta from "./pages/PaginaPergunta/PaginaPergunta";
import PaginaNovaFase from "./pages/PaginaNovaFase/PaginaNovaFase";
import { useState } from "react";
import questoes from "./data/questoes.json";
import PaginaLivro from "./pages/PaginaLivro/PaginaLivro";

const getEtapaInicial = () => {
  return questoes[0]?.texto ? "livro" : "pergunta";
};

function App() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [etapaAtual, setEtapaAtual] = useState(getEtapaInicial());

  const questaoAtual = questoes[indiceAtual];

  const handleFecharJogo = () => {
    alert("O jogo será reiniciado.");
    setIndiceAtual(0);
    setEtapaAtual(getEtapaInicial());
  };

  const avancarParaProximoItem = () => {
    const proximoIndice = indiceAtual + 1;

    if (proximoIndice >= questoes.length) {
      alert("Parabéns, você chegou ao final do jogo!");
      handleFecharJogo();
      return;
    }

    setIndiceAtual(proximoIndice);
    const proximaQuestao = questoes[proximoIndice];
    setEtapaAtual(proximaQuestao.texto ? "livro" : "pergunta");
  };

  const handleIrParaPergunta = () => {
    setEtapaAtual("pergunta");
  };

  const handleAvancarDaPergunta = () => {
    if (questaoAtual.fimDeFase) {
      setEtapaAtual("novaFase");
    } else {
      avancarParaProximoItem();
    }
  };

  const handleAvancarDaNovaFase = () => {
    avancarParaProximoItem();
  };

  switch (etapaAtual) {
    case "livro":
      return (
        <PaginaLivro
          texto={questaoAtual.texto}
          onProximo={handleIrParaPergunta}
          onFechar={handleFecharJogo}
        />
      );

    case "pergunta":
      return (
        <PaginaPergunta
          questao={questaoAtual}
          onAvancar={handleAvancarDaPergunta}
          onFechar={handleFecharJogo}
        />
      );

    case "novaFase":
      return (
        <PaginaNovaFase
          onAvancar={handleAvancarDaNovaFase}
          onFechar={handleFecharJogo}
        />
      );

    default:
      return null;
  }
}

export default App;
