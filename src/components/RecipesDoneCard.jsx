import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardDoneDrink from './CardDoneDrink';
import CardDoneFood from './CardDoneFood';

function RecipesDoneCard({ recipe, index }) {
  const [type, setType] = useState('');
  function VerifyFoodOrDrink() {
    if (recipe !== undefined) {
      if (recipe.type === 'comida') setType('Food');
      else setType('Drink');
    }
  }

  function renderFoodOrDrink() {
    if (type === 'Food') {
      return <CardDoneFood recipe={ recipe } index={ index } />;
    }
    return <CardDoneDrink recipe={ recipe } index={ index } />;
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

export default RecipesDoneCard;

RecipesDoneCard.propTypes = {
  recipe: PropTypes.objectOf.isRequired,
  index: PropTypes.number.isRequired,
};
