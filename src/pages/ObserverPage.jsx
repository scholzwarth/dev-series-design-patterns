
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// Define the Subject component
const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  // Function to update the count and notify observers
  const updateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Row>
        <Col xs={3}>
          <Button variant='success' onClick={() => updateCount(count + 1)}>Increment</Button>
        </Col>
        <Col xs= {3}>
          <Button variant='danger' onClick={() => updateCount(count - 1)}>Decrement</Button>
        </Col>
      </Row>
    </div>
  );
};

// Define the ObserverPage component
const ObserverPage = () => {
  const resources = [
    'https://refactoring.guru/design-patterns/observer/typescript/example',
  ];
  const cqrsResources = [
    'https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/cqrs-pattern.html',
  ];

  return (
    <Container>
      <h1>Observer Pattern Example</h1>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Observer Pattern</Card.Title>
              <p>
                The observer pattern is a way for an object/code to subscribe and unsubscribe to events and react to changes.
                It is a behavioral design pattern that allows an object to notify a list of dependents of a change in state.
              </p>
              <p>
                The observer pattern is used heavily in front end JS/UI code, because the view needs to wait and respond to user input.
                There are already observers built into the DOM and there event listeners like onClick are also an example the observer pattern.
                For example, this onClick event listener subscribes to the buttons and updates the count.
                This example is very simple but demonstrates the built in nature of the observer pattern in JS.
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
      <Row className="mb-3">
        <Col>
          <ButtonCounter />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>CQRS/Event Bus</Card.Title>
              <p>
                The other place I know we use the observer pattern is the CQRS pattern.
                In these implementations, we have a central event bus that listens for events and then runs the correct code based on the event.
                In the CQRS (command query responsibility segregation) pattern, the application is separated into write (command) and read (query) sides.
                The command side is responsible for validating and writing command events to a write database.
                An "observer" will listen for command events from the write and update the read side accordingly.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Resources</Card.Title>
              <ul>
                {cqrsResources.map(resource => (
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
    </Container>
  );
};

export default ObserverPage;
