import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FlashcardDeck from '../../components/Flashcards/FlashcardDeck';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CategoryFlashcards = () => {
  const router = useRouter();
  const { category } = router.query;
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [result, setResult] = useState('');
  const [showBack, setShowBack] = useState(false);

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

  useEffect(() => {
    if (category) {
      fetch(`/api/flashcards-by-category?category=${category}`)
        .then(response => response.json())
        .then(data => setFlashcards(data))
        .catch(error =>
          console.error('Error fetching flashcards by category:', error)
        );
    }
  }, [category]);

  const handleNewWord = () => {
    setResult('');
    setShowBack(false);
    setCurrentFlashcardIndex(prevIndex => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className={`${getBackgroundColor()}`}>
      <Header />
      <main className="min-h-screen flex justify-center pt-10">
        <FlashcardDeck
          flashcard={flashcards[currentFlashcardIndex]}
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
};

export default CategoryFlashcards;
