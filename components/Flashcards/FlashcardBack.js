import React from 'react';
import Button from '../Button';

const FlashcardBack = ({
  answer,
  result,
  resultText,
  userAnswer,
  example,
  onNewWord,
}) => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white border rounded-lg shadow-lg flex flex-col justify-between items-center space-y-8">
      <h2 className="text-2xl  mb-2 text-custom-purple font-bold">
        {resultText}
      </h2>
      {result == 'right' ? (
        <p className="text-custom-purple">Resposta: {answer}</p>
      ) : (
        <div className="justify-center">
          <p className="text-custom-purple">Sua resposta: {userAnswer}</p>
          <p className="text-custom-purple">
            Resposta correta: {answer.toLowerCase()}
          </p>
        </div>
      )}
      <p className="text-custom-purple">Exemplo: {example}</p>

      <Button text={'Nova Palavra'} disabled={false} onClick={onNewWord} />
    </div>
  );
};

export default FlashcardBack;
