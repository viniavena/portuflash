import React, { useState } from 'react';
import Button from '../Button';
import SpeechWord from './Speechword';

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
        <div className="flex items-center">
          <p className="mr-2">Answer: {answer}</p>
          <SpeechWord text={answer} />
        </div>
      ) : (
        <div className="justify-center">
          <p>Your answer: {userAnswer}</p>

          <div className="flex items-center">
            <p className="mr-2">Right answer: {answer.toLowerCase()}</p>
            <SpeechWord text={answer} />
          </div>
        </div>
      )}
      <div className="items-center">
        <p className="mr-2">Exemplo: {example}</p>
        <SpeechWord text={example} />
      </div>

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
