import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../style/FoodDescriptionPage.css';

function FoodInfo({ foodId }) {
  const { strMealThumb, strMeal, strCategory } = foodId;

  const ingredients = [];
  const strIngredient = 'strIngredient';
  const strMeasure = 'strMeasure';
  const measure = [];

  const liCondition = (ingredient, index) => `${ingredient}
    ${measure[index] === null
    || measure[index] === ''
    ? '' : ` - ${measure[index]}`}`;

  Object.entries(foodId).forEach(([key, value]) => {
    if (key.includes(strIngredient)) return ingredients.push(value);
    if (key.includes(strMeasure)) return measure.push(value);
  });

  function liContent() {
    return ingredients
      .map((ingredient, index) => (ingredient !== '' && ingredient !== null ? (
        <li
          key={ index }
          className="ingredients"
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { liCondition(ingredient, index) }
          {' '}
        </li>)
        : null));
  }

  return (
    <div className="food-description">
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <div className="description-container">
        <h2 data-testid="recipe-title" className="recipe-title">{strMeal}</h2>
        <div className="btn-div">
          <button
            type="button"
            data-testid="share-btn"
            className="share-btn"
          >
            <img src={ shareIcon } alt="share-button" />
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
            className="favorite-btn"
          >
            <img src={ blackHeartIcon } alt="favorite-button" />
          </button>
        </div>
        <p
          data-testid="recipe-category"
          className="recipe-category"
        >
          {`Category: ${strCategory}`}
        </p>
        <div className="ingredients-div">
          <p>Ingredients:</p>
          <ul>
            {liContent()}
          </ul>
        </div>
      </div>
    </div>
  );
}

FoodInfo.propTypes = {
  foodId: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
};

export default FoodInfo;
