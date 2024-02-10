import './outputTable.css';
function OutputTable() {
  return (
    <div class="App">
      <div class='outputTable'>
        <h3> Recipe Costs</h3>
        <table id='ingredientTable'>
            <tr>
                <th>Ingredient:</th>
                <th>Quantity:</th>
                <th>Cost for Recipe:</th>
                <th>Cost for Whole Item:</th>
                <th>Remove:</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button class='trashcan'>Remove</button></td>
            </tr>
            
        </table>
      </div>
    </div>
  );
}

export default OutputTable;