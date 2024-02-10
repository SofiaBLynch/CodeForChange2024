import React, { useState } from 'react';
import './userInput.css';
import data from './data/data.json'

function UserInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('tbsp'); // Default unit, can be changed as needed
  const [itemList, setItemList] = useState([]);

  let newData = Object.keys(data);
  let choice;

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }

  function handleAdd() {
    setItemList(itemList => [...itemList, choice])
    console.log(itemList)
  }

  return (
    <div className="User-app">
      <div className='userInput'>
        <div class='searchBar'>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            id='userSearchValue'
          />
          <div className="dropdown">
            {newData.filter(item => {
              const termLower = searchTerm.toLowerCase();
              const itemLower = item.substring(0, item.indexOf(',')).toLowerCase();

              return termLower && itemLower.startsWith(termLower)
                && termLower !== itemLower
            }).slice(0, 5)
              .map((item) => (
                <div className="dropdown-content"
                  onClick={() => {
                    setSearchTerm(item.substring(0, item.indexOf(',')))
                    choice = item;
                  }}>
                  {item.substring(0, item.indexOf(','))}
                </div>
              ))}
          </div>
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

        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default UserInput;
