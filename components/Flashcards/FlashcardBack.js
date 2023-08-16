import React from 'react';
import Button from '../Button';

const getColorClass = result => {
  switch (result) {
    case 'right':
      return 'green-500';
    case 'almost':
      return 'yellow-500';
    case 'wrong':
      return 'red-500';
    default:
      return 'custom-purple';
  }
};

const FlashcardBack = ({
  answer,
  result,
  resultText,
  userAnswer,
  example,
  onNewWord,
}) => {
  const fontColorClass = getColorClass(result);

  return (
    <div
      className={`max-w-md mx-auto p-8 bg-white border rounded-lg shadow-lg flex flex-col justify-between items-center space-y-8 text-gray-700`}
    >
      <h2 className={`text-2xl mb-2 font-bold`}>{resultText}</h2>
      {result === 'right' ? (
        <p>Answer: {answer}</p>
      ) : (
        <div className="justify-center">
          <p>Your answer: {userAnswer}</p>
          <p>Right answer: {answer.toLowerCase()}</p>
        </div>
      )}
      <p>Exemplo: {example}</p>

      <Button
        text={'Nova Palavra'}
        disabled={false}
        onClick={onNewWord}
        color={`bg-${fontColorClass}`}
      />
    </div>
  );
};

export default FlashcardBack;
