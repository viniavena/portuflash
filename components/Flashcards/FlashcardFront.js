import React, { useState } from 'react';
import Button from '../Button';

const FlashcardFront = ({ word, example, answer, onCheck }) => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = event => {
    setUserInput(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white border rounded-lg shadow-lg flex flex-col justify-between items-center space-y-8">
      <h2 className="text-2xl  mb-2 text-custom-purple font-bold">
        {word.toLowerCase()}
        <br />
        <i className="text-sm  mb-2 text-custom-purple font-bold">{example}</i>
      </h2>
      <input
        className="w-full py-1 border-b border-custom-purple text-custom-purple focus:outline-none bg-transparent"
        type="text"
        placeholder="Digite sua resposta..."
        onChange={e => handleInputChange(e)}
      />

      <Button
        text={'Verificar'}
        onClick={() => onCheck(userInput, answer)}
        disabled={userInput.trim() === ''}
      />
    </div>
  );
};

export default FlashcardFront;
