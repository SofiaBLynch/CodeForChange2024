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

 
  function addRow() {
    console.log('being called');
    var searchVal = document.getElementById('userSearchValue').value;
    var quantityVal = document.getElementById('userQuantity').value;
    var unitVal = document.getElementById('userUnit').value;
    var table;
    if(searchVal != null && quantityVal != null && unitVal != null)
    {
      table = "<tr><td>" + searchVal + "</td><td>"+quantityVal + unitVal + "</td></tr>";
      document.getElementById('ingredientTable').innerHTML += table;
      newData.find(searchVal)
    } else {
      return;
    }
  }

  return (
    <div className="User-app">
      <div className='userInput'>
        <div className='searchBar'>
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
          id='userQuantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}

        />

        <select id = 'userUnit' value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="tbsp">Tablespoon (tbsp)</option>
          <option value="cup">Cup (cup)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="ml">Milliliter (ml)</option>
          <option value="l">Liter (l)</option>
          <option value="g">Gram (g)</option>
          <option value="kg">Kilogram (kg)</option>
          {/* Add more units as needed */}
        </select>

        <button type='button' onClick={addRow}>Add</button>
      </div>
      <div className='outputTable'>
        <h3> Recipe Costs</h3>
        <table >
          <thead>
            <tr>
                <th>Ingredient:</th>
                <th>Quantity:</th>
                <th>Cost for Recipe:</th>
                <th>Cost for Whole Item:</th>
                <th>Remove:</th>
            </tr>
          </thead>
          <tbody id='ingredientTable'>

          </tbody>
        </table>
      </div>
      <div className='outputTable'>
        <table id='totalTable'>
          <tbody>
            <tr>
                <td>Total to Make Recipe:</td>
                <td id='totalCost'>$_____</td>
                <td><button className='trashcan'>ClearTable</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInput;
