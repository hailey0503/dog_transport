
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Carousel from 'react-bootstrap/Carousel'

import Dog1 from "./dog_1.jpg"
import Dog2 from "./dog_2.jpg"
import Dog3 from "./dog_3.png"
import Dog4 from "./dog_4.jpeg"
import Dog5 from "./dog_5.jpeg"
import Dog6 from "./dog_6.jpeg"
import Dog7 from "./dog_7.jpeg"
import Dog8 from "./dog_8.jpeg"
import Dog9 from "./dog_9.jpeg"
import Dog10 from "./dog_10.jpeg"



function Home() {
  return (
    <div>
      <div className="Home">
        
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Dog8}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Dog Transport</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Dog9}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Travel with dogs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Dog10}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



          <Form>
            <Form.Row className="align-items-center">
              <Col xs= {5}>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Destination
                </Form.Label>
                
                  <Form.Control className="mb-2" type="text" placeholder="Destination" />
               
              </Col>

              <Col xs= {5}>
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Data
                </Form.Label>
                
                 
                  <Form.Control className="mb-2" type="date" id="start" name="trip-start" value="2021-01-22"
                  min="2021-01-01" max="2021-12-31" />
                
              </Col>
              <Col xs= {2}>
              <Button type="info" className="mb-2"> Submit</Button>
              </Col>
            </Form.Row>
          </Form>
        

          <CardColumns>
            <Card>
              <Card.Img variant="top" src={Dog1} />
              <Card.Body>
                <Card.Title>DOGE_1</Card.Title>
                <Card.Text>
                  This doge wants to go to LA
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={Dog4} />
              <Card.Body>
                <Card.Title>DOGE_2</Card.Title>
                <Card.Text>
                  This doge wants to go to SF
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={Dog5} />
              <Card.Body>
                <Card.Title>DOGE_3</Card.Title>
                <Card.Text>
                  This doge needs to go to NY
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  These are good dogs and dogs need you. Please help
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Dog6} />
              <Card.Body>
                <Card.Title>DOGE_4</Card.Title>
                <Card.Text>
                  This doge wants to go to Seattle
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>


            <Card>
              <Card.Img variant="top" src={Dog7} />
              <Card.Body>
                <Card.Title>DOGE_5</Card.Title>
                <Card.Text>
                  This doge wants to go to Boston
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src={Dog9} />
              <Card.Body>
                <Card.Title>DOGE_6</Card.Title>
                <Card.Text>
                  This doge wants to go to Toronto
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardColumns>
        </Container>
      </div>
    </div>
  );
}

export default Home;
