import React from 'react';
import data from './data/etsy.json'
import Listing from './components/Listing'
import './App.css';

function App() {
  return (     
      <Listing items={data} />     
  );
}

export default App;
