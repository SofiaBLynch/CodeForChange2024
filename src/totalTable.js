import './totalTable.css';
function TotalTable() {
  return (
    <div class="App">
      <div class='outputTable'>
        <table id='totalTable'>
            <tr>
                <td>Total to Make Reciepe:</td>
                <td id='totalCost'>$_____</td>
                <td><button class='trashcan'>ClearTable</button></td>
            </tr>
            
        </table>
      </div>
    </div>
  );
}

export default TotalTable;