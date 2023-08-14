import Head from 'next/head';
import FlashcardFront from '../components/Flashcards/FlashcardFront';
import { useState } from 'react';

const flashcard = {
  word: 'Casa',
  translation: 'House',
  example: 'Eu moro em uma casa bonita.',
};

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [result, setResult] = useState('');

  // Restante do código...

  const handleNewWord = () => {
    setResult('');
    setShowBack(false);
    setCurrentCardIndex(prevIndex => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div>
      <main className="min-h-screen flex justify-center mt-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Hora do Português</h1>
          <h2 className="text-2xl mb-20 font-bold">Portuguese Time</h2>
          {showBack ? (
            <FlashcardBack
              flashcard={flashcard}
              result={result}
              onNewWord={handleNewWord}
            />
          ) : (
            <FlashcardFront word={flashcard.word} />
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
