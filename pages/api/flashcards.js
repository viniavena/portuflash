import flashcardsData from '../../data/flashcards.json';

export default function handler(req, res) {
  const randomIndex = Math.floor(Math.random() * flashcardsData.length);
  const randomFlashcard = flashcardsData[randomIndex];

  res.status(200).json(randomFlashcard);
}
