import React from 'react';

const FlashcardBack = ({ translation, result, example, onNewWord }) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl mb-2">{result}</h2>
      <p>Tradução: {translation}</p>
      <p>Exemplo: {example}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        onClick={onNewWord}
      >
        Nova Palavra
      </button>
    </div>
  );
};

export default FlashcardBack;
