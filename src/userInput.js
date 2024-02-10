import React, { useState } from 'react';
import './userInput.css';

function UserInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('tbsp'); // Default unit, can be changed as needed

  return (
    <div className="App">
      <p id='userInputError'></p>
      
      <div className='userInput'>
        <h3> Input Ingredient</h3>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="tbsp">Tablespoon (tbsp)</option>
          <option value="tsp">Teaspoon (tsp)</option>
          <option value="cup">Cup (cup)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="ml">Milliliter (ml)</option>
          <option value="l">Liter (l)</option>
          <option value="g">Gram (g)</option>
          <option value="kg">Kilogram (kg)</option>
          {/* Add more units as needed */}
        </select>

        <button onClick={() => {
          console.log('Search Term:', searchTerm, 'Quantity:', quantity, 'Unit:', unit);
          // Implement your search and handling logic here.
        }}>Search</button>
      </div>
    </div>
  );
}

export default UserInput;
