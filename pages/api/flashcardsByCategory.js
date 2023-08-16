import flashcardsData from '../../data/flashcards.json';

export default function handler(req, res) {
  const { category } = req.query;

  if (category) {
    const filteredFlashcards = flashcardsData.filter(flashcard =>
      flashcard.tags.includes(category)
    );
    res.status(200).json(filteredFlashcards);
  } else {
    res.status(400).json({ error: 'Category parameter is required.' });
  }
}
