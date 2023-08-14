import React, { useState } from 'react';

const Flashcard = ({ word, translation, example }) => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    if (inputValue.toLowerCase() === translation.toLowerCase()) {
      setResult('Correto!');
    } else if (inputValue.toLowerCase() === word.toLowerCase()) {
      setResult('Quase lá!');
    } else {
      setResult('Errado!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl mb-2">{word}</h2>
      <input
        className="w-full px-2 py-1 mb-2 border rounded"
        type="text"
        placeholder="Digite a tradução..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={checkAnswer}
      >
        Verificar
      </button>
      <p className="mt-4">{result}</p>
      <p className="mt-2">Exemplo: {example}</p>
    </div>
  );
};

export default Flashcard;
