import React, { useState } from 'react';

const mapOperationToPost = {
  '+': 'plus',
  '-': 'minus',
  '*': 'multiply',
  '/': 'divide'
}

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [a, operation, b] = expression.split(' ');

  const calculate = async () => {
    if (!operation || !a || !b) return alert('Incorrect expression!');
    try {
      const response = await fetch(`http://localhost:3000/${mapOperationToPost[operation]}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({a,b})
      });
      const resultValue = await response.json();
      setResult(resultValue);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App">
      <input value={expression} onChange={(e)=>setExpression(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      <p>Result: <span>{result}</span></p>
    </div>
  );
}

export default App;
