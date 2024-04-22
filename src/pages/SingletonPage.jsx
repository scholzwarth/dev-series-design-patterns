import { useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import useBeerStore from '../stores/beerStore';

const SingletonPage = () => {
  const resources = [
    'https://refactoring.guru/design-patterns/factory-method',
    'https://www.geeksforgeeks.org/factory-method-for-designing-pattern/',
    'https://chat.openai.com/'
  ]



  return (
    <Container>
      <h1>Singleton Example</h1>
      <p className="mt-4">
        <b>okay, so what is a singleton?</b>
        A Singleton is a creational design pattern that lets you ensure that a class has only one instance while providing a global access point to this instance.
      </p>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Singleton Deets</Card.Title>
              <p>
                In this example, we are using a tenant that has made it's way recently around some of the timmons app - the mapManager.
                this is a perfect example of a singleton.  The mapManager is a class that is used to manage the map component.  It is a singleton because there should only be one instance of the mapManager, ever.

                Another interesting example of a singleton is the store.  The store is a singleton that is used to manage the state, has custom logic and functions, and is only ever initialized once.
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

      <div>
        MAP Singleton example
        also point out the store
      </div>

    </Container>
  );
};

export default SingletonPage;
