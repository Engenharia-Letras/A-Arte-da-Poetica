import "./App.css";
import PaginaPergunta from "./pages/PaginaPergunta/PaginaPergunta";
import PaginaNovaFase from "./pages/PaginaNovaFase/PaginaNovaFase";

function App() {
  const questao = {
    comando: "Identifique a escola literária a que pertence:",
    alternativas: ["Romantismo", "Simbolismo", "Modernismo", "Realismo"],
  };

  return (
    <>
      {/* <PaginaPergunta questao={questao} /> */}
      <PaginaNovaFase />
    </>
  );
}

export default App;
