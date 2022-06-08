import React, { useState, useEffect } from 'react';
import RecipesDoneCard from '../components/RecipesDoneCard';
import Header from '../components/Header';

function ReceitasFeitas() {
  const [recipesDone, setRecipesDone] = useState();
  function getRecipesDone() {
    if (JSON.parse(localStorage.getItem('doneRecipes')) !== []
      && JSON.parse(localStorage.getItem('doneRecipes')) !== null) {
      setRecipesDone(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }

  useEffect(() => {
    getRecipesDone();
  }, []);

  return (
    <div>
      <Header location="Receitas Feitas" />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      {recipesDone !== undefined && recipesDone.map((recipeDone, index) => (
        <RecipesDoneCard key={ index } recipe={ recipeDone } index={ index } />
      ))}
    </div>
  );
}

export default ReceitasFeitas;
