import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
//import Dog from "./dog_in_a_bag.jpg";


function App() {
  return (
    <div>
    {/* <img src={Dog} alt="website logo" /> */}
      <div className="App">
      <Form>
        <Form.Group controlId="location">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Destination" />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" id="start" name="trip-start" value="2021-01-22"
          min="2021-01-01" max="2021-12-31" />
        </Form.Group>

        <Button variant="info">Search</Button>{' '}

      </Form>


      </div>
    </div>
  );
}

export default App;
