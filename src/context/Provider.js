import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filtersResult, setFiltersResult] = useState([]);

  useEffect(() => {
    const arrPlanets = async () => {
      const planets = await fetchApi();
      setData(planets);
    };
    arrPlanets();
  }, []);

  const filteredPlanets = data
    .filter((item) => item.name.toLowerCase()
      .includes(filterByName.name.toLowerCase()))
    .filter((planet) => filtersResult.every(({ comparison, value, column }) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      } if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      } if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      } return true;
    }));

  return (
    <Context.Provider
      value={
        { data,
          filterByName,
          setFilterByName,
          filtersResult,
          setFiltersResult,
          filteredPlanets }
      }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
