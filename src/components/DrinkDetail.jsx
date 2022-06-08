import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextComidas from '../context/ContextComidas';
import { fetchDrinkId } from '../services/bebidasAPI';
import DrinkInfo from './DrinkInfo';
import DrinkLi from './DrinkLi';
import FoodCarousel from './FoodCarousel';

function DrinkDetail() {
  const [drinkId, setDrinkId] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useLocation();
  const ID = route.pathname.split('/');
  const { foodCard } = useContext(ContextComidas);

  const fetchDrinkIDAPI = async (endpoint) => {
    const response = await fetchDrinkId(endpoint);
    setDrinkId(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchDrinkIDAPI(ID[ID.length - 1]);
  }, []);

  return (
    <div>
      {(loading ? <p> Loading...</p> : (
        <>
          <DrinkInfo drinkId={ drinkId[0] } />
          <DrinkLi drinkId={ drinkId[0] } />
          <FoodCarousel foodCard={ foodCard } />
        </>
      ))}
      <div>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="start-recipe-btn"
        >
          Iniciar Receita

        </button>
      </div>
    </div>
  );
}

export default DrinkDetail;
