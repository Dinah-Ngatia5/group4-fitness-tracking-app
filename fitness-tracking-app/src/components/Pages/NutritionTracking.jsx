// Nutrition tracking
import React, { useState, useEffect } from 'react';

const NutritionTracker = ({ apiKey }) => {
  const [foodData, setFoodData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/food/products/search?query=${searchQuery}&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    if (fetchingData) {
      fetchFoodData();
    }

    return () => {
      setFetchingData(false);
    };
  }, [fetchingData, searchQuery, apiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchingData(true);
  };

  return (
    <div>
      <h2>Nutrition Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter food eaten"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {foodData && foodData.products ? (
        <div>
          <h3>Search Results</h3>
          <ul>
            {foodData.products.map((product) => {
              const calories = product.nutrition ? product.nutrition.calories : 0;
              return (
                <li key={product.id}>
                  <strong>{product.title}</strong>: {calories} calories
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default NutritionTracker;
