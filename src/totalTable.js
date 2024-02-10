import './totalTable.css';
function TotalTable() {
  return (
    <div class="App">
      <div class='outputTable'>
        <table id='ingredientTable'>
            <tr>
                <td>Total to Make Reciepe:</td>
                <td>$_____</td>
                <td><button class='trashcan'>ClearTable</button></td>
            </tr>
            
        </table>
      </div>
    </div>
  );
}

export default TotalTable;