import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function DrinkCarousel({ drinkCard }) {
  const TOTAL_RECOMENDATIONS = 6;

  const recomendationsCard = () => {
    const arrayRecomendations = [];
    for (let i = 0; i < TOTAL_RECOMENDATIONS; i += 1) {
      arrayRecomendations.push(drinkCard[i]);
    }
    return arrayRecomendations;
  };

  return (
    <section className="slider">
      {drinkCard.length !== 0
        ? recomendationsCard()
          .map(({ strDrinkThumb, strDrink, idDrink }, index) => (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <div data-testid={ `${index}-recomendation-title` }>
                <Card
                  picture={ strDrinkThumb }
                  name={ strDrink }
                  index={ index }
                  id={ idDrink }
                />
              </div>
            </div>
          )) : null }
    </section>
  );
}

DrinkCarousel.propTypes = {
  drinkCard: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired,
  ).isRequired,
};

export default DrinkCarousel;
