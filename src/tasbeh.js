import React, { useState } from 'react';

const Tasbeh = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">📿 Tasbeh</h2>
      <p className="text-5xl font-extrabold text-green-600 mb-4">{count}</p>
      <button onClick={handleClick} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 m-2">
        zikr
      </button>
      <button onClick={reset} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 m-2">
        boshidan
      </button>
    </div>
  );
};

export default Tasbeh;
