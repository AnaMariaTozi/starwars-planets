import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import SearchFilter from './components/SearchFilter';
import './App.css';

function App() {
  return (
    <Provider>
      <SearchFilter />
      <Table />
    </Provider>
  );
}

export default App;
