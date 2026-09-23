import { useState } from "react";
import Home from "./Home";
import Component from "./Component";

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
     {showHome && <Component setShowHome={setShowHome} />}
      <button onClick={() => setShowHome(!showHome)}>
        {showHome ? "Скрыть" : "Показать"}
      </button>

      {showHome && <Home setShowHome={setShowHome} />}
    </>
  );
}

export default App;
