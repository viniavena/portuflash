import react, { useState } from 'react';
import FlashcardBack from './FlashcardBack';
import FlashcardFront from './FlashcardFront';
import LoadingSpinner from '../LoadingSpinner';

const FlashcardDeck = ({
  flashcard,
  result,
  setResult,
  showBack,
  setShowBack,
  handleNewWord,
}) => {
  const [resultText, setResultText] = useState('');
  const [userAnswer, setUserAnswer] = useState('');

  const rightAnswer = [
    'Correto, parabéns!',
    'Well done!',
    'You rock!',
    'Você acertou!',
    'Perfeito!',
    'Exato!',
  ];
  const partialRightAnswer = [
    'Quase lá!',
    'Foi por pouco!',
    'Almost right!',
    'Só faltou um detalhe...',
    'Quase isso!',
    'Almost right!',
  ];
  const wrongAnswer = [
    "Hmm it's wrong! Try again",
    'Não está certo, mas na próxima você acerta',
    'Eu acredito que você consegue na próxima',
    'Não foi dessa vez, mas continue tentando',
  ];

  const handleCheck = (userInput, flashcardAnswer) => {
    const answer = flashcardAnswer.toLowerCase();
    const userAnswer = userInput.toLowerCase();
    setUserAnswer(userAnswer);

    if (userAnswer === answer) {
      setResultText(
        rightAnswer[Math.floor(Math.random() * rightAnswer.length)]
      );
      setResult('right');
    } else {
      const halfLength = Math.ceil(answer.length / 2);
      const commonLetters = Array.from(answer).filter(letter =>
        userAnswer.includes(letter)
      ).length;
      if (commonLetters > halfLength) {
        setResult('almost');
        setResultText(
          partialRightAnswer[
            Math.floor(Math.random() * partialRightAnswer.length)
          ]
        );
      } else {
        setResult('wrong');
        setResultText(
          wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)]
        );
      }
    }
    setShowBack(true);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">Hora do Português</h1>
      <h2 className="text-2xl mb-10 font-bold">Portuguese Time</h2>
      <div className="max-w-full px-4 sm:max-w-md mx-auto sm:mx-4">
        {flashcard ? (
          showBack ? (
            <FlashcardBack
              example={flashcard.example_portuguese}
              answer={flashcard.portuguese}
              result={result}
              resultText={resultText}
              onNewWord={handleNewWord}
              userAnswer={userAnswer}
            />
          ) : (
            <FlashcardFront
              word={flashcard.english}
              answer={flashcard.portuguese}
              onCheck={handleCheck}
              example={flashcard.example_english}
            />
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default FlashcardDeck;
