import "./App.css";
import PaginaPergunta from "./pages/PaginaPergunta/PaginaPergunta";
import PaginaNovaFase from "./pages/PaginaNovaFase/PaginaNovaFase";
import { useState } from "react";
import questoes from "./data/questoes.json";

function App() {
  const [indiceQuestao, setIndiceQuestao] = useState(0);
  const [mostrarTelaNovaFase, setMostrarTelaNovaFase] = useState(false);
  const questaoAtual = questoes[indiceQuestao];

  const handleAvancar = () => {
    if (mostrarTelaNovaFase) {
      setMostrarTelaNovaFase(false);
      setIndiceQuestao(indiceQuestao + 1);
    } else {
      if (indiceQuestao < questoes.length - 1) {
        setMostrarTelaNovaFase(true);
      } else {
        alert("Fim do Quiz! Parabéns!");
      }
    }
  };

  return (
    <>
      {mostrarTelaNovaFase ? (
        <PaginaNovaFase onAvancar={handleAvancar} />
      ) : (
        <PaginaPergunta questao={questaoAtual} onAvancar={handleAvancar} />
      )}
    </>
  );
}

export default App;
