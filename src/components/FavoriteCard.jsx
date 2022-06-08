import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardFavoriteDrink from './CardFavoriteDrink';
import CardFavoriteFood from './CardFavoriteFood';

function FavoriteCard({ recipe, index }) {
  const [type, setType] = useState('');
  function VerifyFoodOrDrink() {
    if (recipe !== undefined) {
      if (recipe.type === 'comida') setType('Food');
      else setType('Drink');
    }
  }

  function renderFoodOrDrink() {
    if (type === 'Food') {
      return <CardFavoriteFood recipe={ recipe } index={ index } />;
    }
    return <CardFavoriteDrink recipe={ recipe } index={ index } />;
  }

  useEffect(() => {
    VerifyFoodOrDrink();
  }, []);

  return (
    <div>
      { renderFoodOrDrink() }
    </div>
  );
}

FavoriteCard.propTypes = {
  recipe: PropTypes.objectOf(String).isRequired,
  index: PropTypes.string.isRequired,
};

export default FavoriteCard;
