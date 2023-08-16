import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

import FlashcardDeck from '../components/Flashcards/FlashcardDeck';

export default function Home() {
  const [showBack, setShowBack] = useState(false);
  const [result, setResult] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [flashcard, setFlashcard] = useState(null);

  const getBackgroundColor = () => {
    if (showBack) {
      switch (result) {
        case 'right':
          return 'bg-green-500';
        case 'almost':
          return 'bg-yellow-500';
        case 'wrong':
          return 'bg-red-500';
        default:
          return 'bg-custom-purple'; // Default color
      }
    } else {
      return 'bg-custom-purple';
    }
  };

  const handleNewWord = async () => {
    setResult('');
    setShowBack(false);
    setUserAnswer('');
    const response = await fetch('/api/flashcards');
    const newFlashcard = await response.json();

    setFlashcard(newFlashcard);
  };

  useEffect(() => {
    handleNewWord();
  }, []);

  return (
    <div className={`${getBackgroundColor()}`}>
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <main className="min-h-screen flex justify-center pt-10">
        <FlashcardDeck
          flashcard={flashcard}
          result={result}
          setResult={setResult}
          showBack={showBack}
          setShowBack={setShowBack}
          handleNewWord={handleNewWord}
        />
      </main>
      <Footer />
    </div>
  );
}
