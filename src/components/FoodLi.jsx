import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MIN_URL = 23;
const MAX_URL = 32;

function FoodLi({ foodId }) {
  const [desc, setDesc] = useState([]);
  const { strYoutube, strInstructions, strMeal } = foodId;

  const unhandleURL = strYoutube === null ? '' : strYoutube;
  const firstURL = unhandleURL.slice(0, MIN_URL);
  const secondURL = unhandleURL.slice(MAX_URL, [unhandleURL.length]);
  const urlYT = `${firstURL}/embed/${secondURL}`;

  const splitInstructions = () => {
    const instructionsStrings = strInstructions.split('.');

    instructionsStrings.pop();

    setDesc(instructionsStrings);
  };

  useEffect(() => {
    splitInstructions();
  }, []);

  return (
    <div className="food-description-div">
      <div>
        <h4>Instructions:</h4>
        <ol
          data-testid="instructions"
          className="instructions"
        >
          { desc.map((instruction, id) => (
            <li
              key={ `list-element-${id}` }
            >
              {instruction}
            </li>
          )) }
        </ol>
      </div>
      { strYoutube && strYoutube !== null ? (<iframe
        data-testid="video"
        title={ strMeal }
        width="100%"
        height="443"
        src={ urlYT }
        frameBorder="0"
        allowFullScreen
        className="video"
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
