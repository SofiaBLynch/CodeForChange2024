import React, { useState } from 'react';
import './userInput.css';

function UserBudget() {
  const [monthlyBudget, setSearchTerm] = useState('');
  const [monthlyMeals, setQuantity] = useState('');

  return (
    <div className="App">
      <p id='userBudgetError'></p>
      <div className='userInput'>
        <div class='budgetHeader'>
            <h3>Monthly Budget</h3>
            <p> Input your monthly budget for cooking at home and the amount of meals you estimate to cook. </p>
        </div>
        <input
          type="number"
          placeholder="Monthly Budget"
          value={monthlyBudget}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="number"
          placeholder="# of Meals per Month"
          value={monthlyMeals}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserBudget;
