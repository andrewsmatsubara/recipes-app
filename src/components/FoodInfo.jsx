import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FoodInfo({ foodId }) {
  const { strMealThumb, strMeal, strCategory } = foodId;

  return (
    <div>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">{strMeal}</h2>
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
      <p data-testid="recipe-category">{strCategory}</p>
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
