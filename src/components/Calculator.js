import React, { useState } from 'react';
import { add } from '../utils/calculator';

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null);
      setResult(null)
      const res = add(input);
      setResult(res);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className='calculator'>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter Numbers"
        className='calculator__input'
      />
      <button onClick={handleCalculate} className='calculator__button'>Calculate</button>
      {error && <p className='error'>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
      <div>
        {add("1\n2,3")}
      </div>
      <p>{add('//;\n1;9')}</p>
    </div>
  );
}

export default Calculator;
