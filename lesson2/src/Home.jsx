import { useState, useEffect, useRef } from "react";

const Home = ({ setShowHome }) => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    console.log("Работаю при обновлении count");
  }, [count]);

  useEffect(() => {
    console.log("Компонент сформирован");

    return () => {
      console.log("Компонент удалён");
    };
  }, []);

  return (
    <>
      <div>
        <h1>Home</h1>

        <h2>{count}</h2>

        <button onClick={() => setCount(count + 1)}>+</button>

        <button onClick={() => setCount(Math.max(count - 1, 0))}>
          -
        </button>

        <button onClick={() => setCount(0)}>
          reset
        </button>

        <button onClick={() => setCount(Math.min(count + 5, 15))}>
          +5
        </button>

        <button onClick={() => setCount(Math.max(count - 5, 0))}>
          -5
        </button>
      </div>

      <button onClick={() => setShowHome(false)}>
        Закрыть
      </button>
    </>
  );
};

export default Home;
