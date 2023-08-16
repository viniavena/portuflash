import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import LoadingSpinner from '../components/LoadingSpinner';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="bg-custom-purple">
      <Header />
      <main className="min-h-screen flex justify-center items-center p-10">
        <div className="max-w-screen-lg mx-auto">
          {categories.length > 0 ? (
            <>
              <h2 className="mb-10 text-white text-center text-2xl">
                Categories
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href={`/categories/${category}`}>
                      <div className="block p-4 bg-white hover:bg-gray-100 rounded-lg transition duration-300 text-custom-purple">
                        <span className="text-lg font-semibold break-words">
                          {category}
                        </span>
                        <span className="absolute bottom-0 right-0 mb-2 mr-2">
                          ➞
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </main>
    </div>
  );
};

export default Categories;
