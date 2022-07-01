import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContextComidas from '../context/ContextComidas';

function Card({ picture, name, index, id }) {
  const { route } = useContext(ContextComidas);

  return (
    <div data-testid={ `${index}-recipe-card` } className="item">
      <Link to={ `${route}/${id}` }>
        <img
          src={ picture }
          alt={ name }
          data-testid={ `${index}-card-img` }
          className="img"
        />
      </Link>
      <a data-testid={ `${index}-card-name` } href={ `${route}/${id}` }>{ name }</a>
    </div>
  );
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
