import logo from './logo.svg';
import './App.css';
//import Dog from "./dog_in_a_bag.jpg";


function App() {
  return (
    <div>
    {/* <img src={Dog} alt="website logo" /> */}
      <div className="App">
        <label for="destination">Destination</label>

        <input type="text" name="destination" />

        <input type="date" id="start" name="trip-start"
        value="2021-01-22"
        min="2021-01-01" max="2021-12-31" />
        <p>
          <button type="button">Search</button>
        </p>
      </div>
    </div>
  );
}

export default App;
