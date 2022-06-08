import React, { useState, useEffect } from 'react';
import FavortiteCard from '../components/FavoriteCard';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const [favorites, setFavorites] = useState();
  console.log(favorites);
  function getFavoriteRecipes() {
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== []
      && JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      setFavorites(JSON.parse(localStorage.getItem('favoriteRecipes')));
    }
  }

  useEffect(() => {
    getFavoriteRecipes();
  }, []);

  return (
    <div>
      <Header location="Receitas Favoritas" />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      {favorites !== undefined && favorites.map((favorite, index) => (
        <FavortiteCard key={ index } recipe={ favorite } index={ index } />
      ))}
    </div>
  );
}

export default ReceitasFavoritas;
