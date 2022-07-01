import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import Search from './Search';
import searchIcon from '../images/searchIcon.svg';
import '../style/Header.css';

function Header({ location }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => (show ? setShow(false) : setShow(true));

  return (
    <div className="header-container">
      <header className="header">
        <Link to="/perfil">
          <div src={ profileIcon } data-testid="profile-top-btn">
            <img src={ profileIcon } alt="profile-icon" />
          </div>
        </Link>
        <h1 data-testid="page-title">{location}</h1>
        {
          (location.includes('Explorar')
          && !location.includes('Origem')
          ) || location.includes('Perfil')
            || location.includes('Receitas')
            ? null : (
              <button type="button" onClick={ toggleShow } className="search-button">
                <img
                  src={ searchIcon }
                  alt="search-icon"
                  data-testid="search-top-btn"
                />
              </button>
            )
        }
        {show && (<Search toggleShow={ toggleShow } />)}
      </header>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Header;

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
