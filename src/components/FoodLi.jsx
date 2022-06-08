import React from 'react';
import PropTypes from 'prop-types';

const MIN_URL = 23;
const MAX_URL = 32;

function FoodLi({ foodId }) {
  const { strYoutube, strInstructions, strMeal } = foodId;

  const ingredients = [];
  const strIngredient = 'strIngredient';
  const strMeasure = 'strMeasure';
  const measure = [];

  const unhandleURL = strYoutube === null ? '' : strYoutube;
  const firstURL = unhandleURL.slice(0, MIN_URL);
  const secondURL = unhandleURL.slice(MAX_URL, [unhandleURL.length]);
  const urlYT = `${firstURL}/embed/${secondURL}`;

  Object.entries(foodId).forEach(([key, value]) => {
    if (key.includes(strIngredient)) return ingredients.push(value);
    if (key.includes(strMeasure)) return measure.push(value);
  });

  const liCondition = (ingredient, index) => `${ingredient}
    ${measure[index] === null
    || measure[index] === ''
    ? '' : ` - ${measure[index]}`}`;

  function liContent() {
    return ingredients
      .map((ingredient, index) => (ingredient !== '' && ingredient !== null ? (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { liCondition(ingredient, index) }
          {' '}
        </li>)
        : null));
  }

  return (
    <div>
      <ul>
        {liContent()}
      </ul>
      <p data-testid="instructions">{ strInstructions }</p>
      { strYoutube && strYoutube !== null ? (<iframe
        data-testid="video"
        title={ strMeal }
        width="100%"
        height="443"
        src={ urlYT }
        frameBorder="0"
        allowFullScreen
      />) : null}
    </div>
  );
}

FoodLi.propTypes = {
  foodId: PropTypes.shape({
    strYoutube: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodLi;
