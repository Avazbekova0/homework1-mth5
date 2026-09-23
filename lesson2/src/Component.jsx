function Component({ showHome, setShowHome }) {                               
  return (
    <button onClick={() => setShowHome(!showHome)}>
      {showHome ? "Скрыть" : "Показать"}
    </button>
  );
}

export default Component;
