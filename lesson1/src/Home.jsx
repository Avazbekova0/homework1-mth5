import React from 'react'; 
import { useState } from 'react';

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(Math.max(num - 1, 0))}>-</button>
      <button onClick={() => setNum(0)}>reset</button>
      <button onClick={() => setNum(Math.min(num + 5, 15))}>+5</button>
      <button onClick={() => setNum(Math.max(num - 5, 0))}>-5</button>
    </div>
  );
};

export default Home;
