import React, { useState } from 'react';
import './userInput.css';
import data from './data/data.json'


function UserInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('tbsp'); // Default unit, can be changed as needed


  let newData = Object.keys(data);

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }



  return (
    <div className="User-app">
      <div className='userInput'>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="dropdown">
          {newData.filter(item => {
            const termLower = searchTerm.toLowerCase();
            const itemLower = item.toLocaleLowerCase();

            return termLower && itemLower.includes(termLower);
          }).slice(0,5)
          .map((item) => (
            <div className="dropdown-content">{item.substring(0, item.indexOf(','))}</div>
          ))}
          </div>

        

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="tbsp">Tablespoon (tbsp)</option>
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
