import "./BotaoAlternativa.css";

const BotaoAlternativa = ({ alternativa, status, onClick, disabled }) => {
  const statusClasse = status ? `botao-${status}` : "";

  return (
    <div
      className={`botao-alternativa-container ${statusClasse}`}
      onClick={disabled ? null : onClick}
      aria-disabled={disabled}
    >
      {alternativa}
    </div>
  );
};

export default BotaoAlternativa;
