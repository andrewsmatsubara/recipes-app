import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContextComidas from '../context/ContextComidas';
import { fetchFoodID } from '../services/comidasAPI';
import FoodInfo from './FoodInfo';
import FoodLi from './FoodLi';
import DrinkCarousel from './DrinkCarousel';

function FoodDetail() {
  const [foodId, setFoodId] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useLocation();
  const ID = route.pathname.split('/');
  const { drinkCard } = useContext(ContextComidas);

  const fetchFoodIDAPI = async (endpoint) => {
    const response = await fetchFoodID(endpoint);
    setFoodId(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchFoodIDAPI(ID[ID.length - 1]);
  }, []);

  return (
    <div>
      {(loading ? <p> Loading...</p> : (
        <>
          <FoodInfo foodId={ foodId[0] } />
          <FoodLi foodId={ foodId[0] } />
          <DrinkCarousel drinkCard={ drinkCard } />
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

export default FoodDetail;
