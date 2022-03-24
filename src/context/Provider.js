import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({

    filterByName: {
      name: '',
    },
    filterByNumericValues: [],

  });

  useEffect(() => {
    const arrPlanets = async () => {
      const planets = await fetchApi();

      setData(planets);
    };
    arrPlanets();
  }, []);

  return (
    <Context.Provider
      value={
        { data, filters, setFilters }
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
