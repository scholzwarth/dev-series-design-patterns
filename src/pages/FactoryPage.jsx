import { useEffect } from 'react';
import useBeerStore from '../stores/beerStore';
import agent from '../lib/agent';
import BreweryFactory from '../components/BreweryFactory';
import { Container, Col, Row, Card } from 'react-bootstrap';

const FactoryPage = () => {
  const allBreweries = useBeerStore(state => state.allBreweries);
  const setAllBreweries = useBeerStore(state => state.setAllBreweries);
  const myBreweries = useBeerStore(state => state.myBreweries);


  const resources = [
    'https://refactoring.guru/design-patterns/factory-method',
    'https://www.geeksforgeeks.org/factory-method-for-designing-pattern/',
    'https://chat.openai.com/'
  ]
  useEffect(() => {
    async function fetchData() {
      const response = await agent.breweries.getRichmondBreweries();
      const henricoResponse = await agent.breweries.getHenricoBreweries();
      setAllBreweries([...response, ...henricoResponse])
      console.log([...response, ...henricoResponse])
      // Do something with the response if needed
    }
    fetchData();
  }, [setAllBreweries]);

  return (
    <Container>
      <h1>Factory Example</h1>
      <p className="mt-4">
        <b>okay, so what is a factory?</b>  A factory is a way to create components in a more dynamic way.
      </p>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Factory Deets</Card.Title>
              <p>
                In this example, we are using a factory to create a list of breweries.
                The factory is a component that takes in a brewery object and returns a component that displays the brewery information.
                The component returned differs based on the brewery type.
              </p>
              <p>The factory is then used to create a list of breweries.  This is a simple example, but factories can be used to create more complex components as well.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Resources</Card.Title>
              <ul>
                {resources.map(resource => (
                  <li key={resource}>
                    <Card.Link href={resource} target="_blank" rel="noreferrer noopener">
                      {resource}
                    </Card.Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h5>Breweries in Richmond: </h5>

      <p>Your Breweries: {myBreweries.map((brewery, index) => index === 0 ? brewery.name : `, ${brewery.name}`)}</p>
      <Row>
        {allBreweries.map(brewery => (
          <Col key={brewery.id} sm={4} className="mt-2">
            <BreweryFactory brewery={brewery} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FactoryPage;
