import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function FoodCarousel({ foodCard }) {
  const TOTAL_RECOMENDATIONS = 6;

  const recomendationsCard = () => {
    const arrayRecomendations = [];
    for (let i = 0; i < TOTAL_RECOMENDATIONS; i += 1) {
      arrayRecomendations.push(foodCard[i]);
    }
    return arrayRecomendations;
  };

  return (
    <section className="slider">
      {foodCard.length !== 0
        ? recomendationsCard()
          .map(({ strMealThumb, strMeal, idMeal }, index) => (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <div data-testid={ `${index}-recomendation-title` }>
                <Card
                  picture={ strMealThumb }
                  name={ strMeal }
                  index={ index }
                  id={ idMeal }
                />
              </div>
            </div>
          )) : null }
    </section>
  );
}

FoodCarousel.propTypes = {
  foodCard: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired,
  ).isRequired,
};

export default FoodCarousel;
