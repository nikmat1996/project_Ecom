import React from 'react';
import { useState } from 'react';
import CheckboxContainer from './components/CheckboxContainer';

function App() {

  const [cityFilter, setCityFilter] = useState({
    title: 'City',
    options: [
      { name: 'Jakarta', isSelected: false}, 
      { name: 'New York', isSelected: false}, 
      { name: 'Baku', isSelected: false}, 
      { name: 'Monza', isSelected: false}, 
      { name: 'Monaco', isSelected: false}
    ]
  })

  return (
    <div>
      <CheckboxContainer data={cityFilter} setValue={setCityFilter} />
    </div>
  );
}

export default App;
