import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { fetchFoodID } from '../services/comidasAPI';
// import { fetchDrinkID } from '../services/bebidasAPI';
import FoodDetail from '../components/FoodDetail';
import DrinkDetail from '../components/DrinkDetail';

function DetalhesReceita() {
  // const [foodId, setFoodId] = useState([]);
  // const [drinkId, setDrinkId] = useState([]);

  const route = useLocation();

  /* const fetchDrinkIDAPI = async (endpoint) => {
    const response = await fetchDrinkID(endpoint);
    setDrinkId(response);
  };

  const fetchFoodIDAPI = async (endpoint) => {
    const response = await fetchFoodID(endpoint);
    setFoodId(response);
  }; */

  /* useEffect(() => {
    fetchDrinkIDAPI(id);
    fetchFoodIDAPI(id);
  }, []); */

  const validateRoute = () => {
    if (route.pathname.includes('comidas')) {
      return <FoodDetail />;
    }
    if (route.pathname.includes('bebidas')) {
      return <DrinkDetail />;
    }
  };

  return (
    <div>
      { validateRoute() }
    </div>
  );
}

DetalhesReceita.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetalhesReceita;
