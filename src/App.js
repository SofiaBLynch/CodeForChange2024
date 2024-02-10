import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" value="this is a test" />
      <input type="text" value="this is a test" />
      
      {/* half size */}
      <img 
        src="https://rotatingsandwiches.com/wp-content/uploads/2023/03/half-smoke.gif?w=480b" 
        alt="Half-Smoke GIF" 
        style={{ width: '240px' }} // Half of 480px
      />

      {/* Second half size */}
      <img 
        src="https://rotatingsandwiches.com/wp-content/uploads/2023/02/pork-gyro.gif?w=480" 
        alt="GYRO GIF" 
        style={{ width: '240px' }} // Half of 480px
      />

      {/* Button */}
      <button>Click Me!!</button>
    </div>
  );
}

export default App;
