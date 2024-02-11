import React, { useState } from 'react';
import './userInput.css';
import data from './data/data.json'

var total = 0.00;


function UserInput() {
  const [searchTerm, setSearchTerm] = useState('');
  let newData = Object.keys(data);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function addRow() {
    var searchVal = document.getElementById('userSearchValue').value;
    
  
    // Fetch the retail price for the selected ingredient
    const ingredientData = data[searchVal];
    let retailPrice = ingredientData ? ingredientData.PRICE_RETAIL : 'N/A';
    total += parseFloat(retailPrice);
    var table;
    if(searchVal ) {
      table = `<tr>
                 <td>${searchVal}</td>
                 
                 <td>$${retailPrice}</td>  <!-- Displaying the retail price here -->
               </tr>`;
      document.getElementById('ingredientTable').innerHTML += table;
      document.getElementById('totalCost').innerText = '$' + total.toFixed(2).toString();
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
              const itemLower = item.toLowerCase();
              return termLower && itemLower.startsWith(termLower) && termLower !== itemLower;
            }).slice(0, 5)
              .map((item) => (
                <div
                  key={item}
                  className="dropdown-content"
                  onClick={() => setSearchTerm(item)}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>

        

        <button type='button' onClick={addRow}>Add</button>
      </div>
      <div className='outputTable'>
        <h3>Recipe Costs</h3>
        <table>
          <thead>
            <tr>
              <th>Ingredient:</th>
              <th>Cost for Whole Item:</th>
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
              <td id='totalCost'>$___</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInput;
