import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function NumericFilter() {
  const { filtersResult, setFiltersResult } = useContext(Context);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const columnOptions = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];

  const handleChange = ({ target: { name, value } }) => {
    setFilterByNumericValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleClick() {
    setFiltersResult([
      ...filtersResult,
      {
        column: filterByNumericValues.column,
        comparison: filterByNumericValues.comparison,
        value: filterByNumericValues.value,
      },
    ]);
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        value={ filterByNumericValues.column }
        onChange={ handleChange }
      >
        {columnOptions.map((item, index) => (
          <option key={ index } value={ item }>{item}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ filterByNumericValues.comparision }
        onChange={ handleChange }
      >
        {comparisonOptions.map((item, index) => (
          <option key={ index } value={ item }>{item}</option>
        ))}
      </select>

      <input
        data-testid="value-filter"
        name="value"
        type="number"
        value={ filterByNumericValues.value }
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>

    </form>
  );
}

export default NumericFilter;
