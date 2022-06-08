import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DrinkInfo({ drinkId }) {
  const { strDrinkThumb, strDrink, strAlcoholic } = drinkId;

  return (
    <div>
      <img
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">{strDrink}</h2>
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
      <p data-testid="recipe-category">{strAlcoholic}</p>
    </div>
  );
}

DrinkInfo.propTypes = {
  drinkId: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
};

export default DrinkInfo;
