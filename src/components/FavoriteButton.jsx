import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FavoriteButton({ recipe }) {
  const [obj, setObj] = useState();
  function objLocalStorage() {
    let newObj = {};
    if (recipe.idMeal) {
      newObj = {
        id: recipe.idMeal,
        type: 'comida',
        area: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: '',
        name: recipe.strMeal,
        image: recipe.strMealThumb,
      };
    } else {
      newObj = {
        id: recipe.idDrink,
        type: 'bebida',
        area: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
      };
    }
    setObj(newObj);
  }

  useEffect(() => {
    objLocalStorage();
  }, []);

  function handleClick() {
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== []
      && JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      const favoritesAntigo = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const arrayFavorites = [...favoritesAntigo, obj];
      localStorage.setItem('favoriteRecipes', JSON.stringify(arrayFavorites));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([obj]));
    }
  }

  return (
    <div>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ handleClick }
      >
        Favoritar
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.objectOf(String).isRequired,
};

export default FavoriteButton;
