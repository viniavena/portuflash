import Head from 'next/head';
import FlashcardFront from '../components/Flashcards/FlashcardFront';
import FlashcardBack from '../components/Flashcards/FlashcardBack';
import LoadingSpinner from '../components/LoadingSpinner';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showBack, setShowBack] = useState(false);
  const [result, setResult] = useState('');
  const [resultText, setResultText] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [flashcard, setFlashcard] = useState(null);

  const rightAnswer = [
    'Correto, Parabéns!',
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

  const handleNewWord = async () => {
    setResult('');
    setShowBack(false);
    setUserAnswer('');
    const response = await fetch('/api/flashcards');
    const newFlashcard = await response.json();

    console.log(newFlashcard);
    setFlashcard(newFlashcard);
  };

  useEffect(() => {
    handleNewWord();
  }, []);

  return (
    <div>
      <main className="min-h-screen flex justify-center mt-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Hora do Português</h1>
          <h2 className="text-2xl mb-20 font-bold">Portuguese Time</h2>
          {flashcard ? (
            showBack ? (
              <FlashcardBack
                example={flashcard.example}
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
              />
            )
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </main>
      <footer className="border-t text-white py-4 text-center">
        <div className="container mx-auto">
          <p>
            Feito com amor por{' '}
            <strong>
              <a href="https://github.com/viniavena">Vini Avena</a>
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
