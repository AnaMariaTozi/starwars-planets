import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arrPlanets = async () => {
      const planets = await fetchApi();
      setData(planets);
    };
    arrPlanets();
  }, []);

  return (
    <Context.Provider value={ { data } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf().isRequired,
};

export default Provider;
