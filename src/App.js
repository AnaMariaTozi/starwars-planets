import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import TextFilter from './components/TextFilter';
import NumericFilter from './components/NumericFilter';
import './App.css';

function App() {
  return (
    <Provider>
      <TextFilter />
      <NumericFilter />
      <Table />
    </Provider>
  );
}

export default App;
