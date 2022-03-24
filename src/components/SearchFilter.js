import React, { useContext } from 'react';
import Context from '../context/Context';

function SearchFilter() {
  const { filters, setFilters } = useContext(Context);

  const handleChange = (event) => {
    setFilters({
      ...filters,
      filterByName: {
        name: event.target.value,
      },
    });
  };

  return (
    <input
      type="search"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}

export default SearchFilter;
