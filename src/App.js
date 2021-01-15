import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
//import Dog from "./dog_in_a_bag.jpg";


function App() {
  return (
    <div>
    {/* <img src={Dog} alt="website logo" /> */}
      <div className="App">
        
        <Container>
          <Form>
            <Form.Row className="align-items-center">
              <Col xs= {4}>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Destination
                </Form.Label>
                
                  <Form.Control className="mb-2" type="text" placeholder="Destination" />
               
              </Col>

              <Col xs= {4}>
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Data
                </Form.Label>
                
                 
                  <Form.Control className="mb-2" type="date" id="start" name="trip-start" value="2021-01-22"
                  min="2021-01-01" max="2021-12-31" />
                
              </Col>
              <Col xs= "auto">
              <Button type="info" className="mb-2"> Submit</Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>

      </div>
    </div>
  );
}

export default App;
