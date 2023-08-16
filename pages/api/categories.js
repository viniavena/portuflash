import categoriesData from '../../data/flashcards.json';

export default function handler(req, res) {
  const allCategories = categoriesData.map(item => item.tags);
  const uniqueCategories = [...new Set(allCategories)];

  res.status(200).json(uniqueCategories);
}
