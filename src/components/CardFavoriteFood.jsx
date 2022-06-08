import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardFavoriteFood({ recipe, index }) {
  function handleClick() {
    if (JSON.parse(localStorage.getItem('favoriteRecipes')) !== []
      && JSON.parse(localStorage.getItem('favoriteRecipes')) !== null) {
      const favoritesAntigo = JSON.parse(localStorage.getItem('favoriteRecipes'));
      favoritesAntigo.forEach((favorite, indice) => {
        if (favorite.id === recipe.id) {
          favoritesAntigo.splice(indice);
        }
      });
      const arrayFavorites = [...favoritesAntigo];
      localStorage.setItem('favoriteRecipes', JSON.stringify(arrayFavorites));
    }
  }
  return (
    <div>
      <Link to={ `/comidas/${recipe.id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
          width="150px"
        />
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {`${recipe.area} - ${recipe.category}`}
      </p>
      <Link to={ `/comidas/${recipe.id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
      </Link>
      <button type="button">
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share-button"
        />
      </button>
      <button type="button" onClick={ handleClick }>
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="favorite-button"
        />
      </button>
    </div>
  );
}

CardFavoriteFood.propTypes = {
  recipe: PropTypes.objectOf(String).isRequired,
  index: PropTypes.string.isRequired,
};

export default CardFavoriteFood;
