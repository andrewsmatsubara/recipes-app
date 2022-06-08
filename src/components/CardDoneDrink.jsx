import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';

function CardDoneDrink({ recipe, index }) {
  return (
    <section>
      <Link to={ `/bebidas/${recipe.id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
          width="150px"
        />
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>{ recipe.alcoholicOrNot }</p>
      <Link to={ `/bebidas/${recipe.id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="icone de compartilhar"
      />
    </section>
  );
}

export default CardDoneDrink;

CardDoneDrink.propTypes = {
  recipe: PropTypes.objectOf(String).isRequired,
  index: PropTypes.string.isRequired,
};
