import React, { useContext } from 'react';
import Context from '../context/Context';

function TextFilter() {
  const { filterByName, setFilterByName } = useContext(Context);

  const handleChange = (event) => {
    setFilterByName({
      ...filterByName,
      name: event.target.value,
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

export default TextFilter;
