import React, { useState } from 'react';
import Button from '../Button';

import { FiVolume1 } from 'react-icons/fi';

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

  const [isSpeechSynthesisSupported, setIsSpeechSynthesisSupported] = useState(
    'speechSynthesis' in window
  );

  const handleSpeak = text => {
    if (isSpeechSynthesisSupported) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      const voices = synthesis.getVoices();
      const portugueseVoice = voices.find(voice => voice.lang === 'pt-BR');
      utterance.voice = portugueseVoice;

      utterance.rate = 0.7;

      synthesis.speak(utterance);
    }
  };

  return (
    <div
      className={`max-w-md mx-auto p-8 bg-white border rounded-lg shadow-lg flex flex-col justify-between items-center space-y-8 text-gray-700`}
    >
      <h2 className={`text-2xl mb-2 font-bold`}>{resultText}</h2>
      {result === 'right' ? (
        <div className="flex items-center">
          <p className="mr-2">Answer: {answer}</p>
          {isSpeechSynthesisSupported && (
            <button onClick={() => handleSpeak(answer)}>
              <FiVolume1 size={20} />
            </button>
          )}
        </div>
      ) : (
        <div className="justify-center">
          <p>Your answer: {userAnswer}</p>

          <div className="flex items-center">
            <p className="mr-2">Right answer: {answer.toLowerCase()}</p>
            {isSpeechSynthesisSupported && (
              <button onClick={() => handleSpeak(answer)}>
                <FiVolume1 size={20} />
              </button>
            )}
          </div>
        </div>
      )}
      <div className="items-center">
        <p className="mr-2">Exemplo: {example}</p>
        {isSpeechSynthesisSupported && (
          <button onClick={() => handleSpeak(example)}>
            <FiVolume1 size={20} />
          </button>
        )}
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
