import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';

function CardDoneFood({ recipe, index }) {
  return (
    <section>
      <Link to={ `/comidas/${recipe.id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
          width="150px"
        />
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.area} - ${recipe.category}` }
      </p>
      <Link to={ `/comidas/${recipe.id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
      </Link>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { recipe.doneDate }
      </p>
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="icone de compartilhar"
      />
      <p data-testid={ `${index}-${recipe.tags[0]}-horizontal-tag` }>
        {recipe.tags[0]}
      </p>
      <p data-testid={ `${index}-${recipe.tags[1]}-horizontal-tag` }>
        {recipe.tags[1]}
      </p>
    </section>
  );
}

export default CardDoneFood;

CardDoneFood.propTypes = {
  recipe: PropTypes.objectOf.isRequired,
  index: PropTypes.number.isRequired,
};
