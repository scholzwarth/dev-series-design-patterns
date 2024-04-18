import { useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

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

      <div>
        MAP Singleton example
        also point out the store
      </div>

    </Container>
  );
};

export default SingletonPage;
