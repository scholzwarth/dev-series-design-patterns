import { useEffect, useState } from 'react';
import useBeerStore from '../stores/beerStore';
import agent from '../lib/agent';
import BreweryFactory from '../components/BreweryFactory';
import { Context, alphabeticalStrategy, typeStrategy } from '../lib/breweryStrategy';
import { Container, Col, Row, Card, Dropdown } from 'react-bootstrap';

const StrategyPage = () => {
  const allBreweries = useBeerStore(state => state.allBreweries);
  const setAllBreweries = useBeerStore(state => state.setAllBreweries);
  const myBreweries = useBeerStore(state => state.myBreweries);

  const [context, setContext] = useState(new Context(alphabeticalStrategy));
  const setStrategy = (strategy) => () => {
    setContext(new Context(strategy));
  }


  const resources = [
    'https://refactoring.guru/design-patterns/factory-method',
    'https://www.geeksforgeeks.org/factory-method-for-designing-pattern/',
    'https://chat.openai.com/'
  ]
  useEffect(() => {
    async function fetchData() {
      const response = await agent.breweries.getRichmondBreweries();
      setAllBreweries([...response, ...henricoResponse])
      console.log([...response, ...henricoResponse])
      // Do something with the response if needed
    }
    fetchData();
  }, [setAllBreweries]);

  return (
    <Container>
      <h1>Strategy Example</h1>
      <p className="mt-4">
        A strategy is a behavioral design pattern that allows you to take a class that does very specific functions and make it extend to more use cases.
      </p>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Strategy Example</Card.Title>
              <p>
                In this example, we are extending the factory example to sort the list of breweries using the strategy pattern.
              </p>
              <p>
                The Context class takes in a strategy object when constructed and uses that strategy to sort the list of breweries.
                The Strategies implement an interface that changes the behavior of the context. The strategy is responsible for implementing the sorting logic.
                The sorting returned differs based on the strategy used when constructing the context.
              </p>
              <p>
                Use the dropdown to change the strategy and see how the list of breweries is sorted differently.
                You can see how you could use extend this for different business rules based on locality, client, etc.
              </p>
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
      <h5>Strategy Selector</h5>
      <Dropdown className='mb-3'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Current Sort Strategy: {context.strategy.name}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={setStrategy(alphabeticalStrategy)}>{alphabeticalStrategy.name}</Dropdown.Item>
          <Dropdown.Item onClick={setStrategy(typeStrategy)}>{typeStrategy.name}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h5>Breweries in Richmond: </h5>

      <p>Your Breweries: {context.sort(myBreweries).map((brewery, index) => index === 0 ? brewery.name : `, ${brewery.name}`)}</p>
      <Row>
        {context.sort(allBreweries).map(brewery => (
          <Col key={brewery.id} sm={4} className="mt-2">
            <BreweryFactory brewery={brewery} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StrategyPage;
