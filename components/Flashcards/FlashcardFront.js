import React from 'react';

const FlashcardFront = ({ word, onCheck }) => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white border rounded-lg shadow-lg flex flex-col justify-between items-center space-y-8">
      <h2 className="text-2xl  mb-2 text-custom-purple font-bold">
        {word.toLowerCase()}
      </h2>
      <input
        className="w-full py-1 border-b border-custom-purple text-custom-purple focus:outline-none bg-transparent"
        type="text"
        placeholder="Digite sua resposta..."
      />
      <button
        className="px-4 py-2 bg-custom-purple text-white rounded"
        onClick={onCheck}
      >
        Verificar
      </button>
    </div>
  );
};

export default FlashcardFront;
