import { Container, Row, Col, Card } from 'react-bootstrap';
import GiphyCard from '../components/GiphyCard';
import BeerGiphy from '../components/BeerGiphy';

const DecoratorPage = () => {
  const resources = [
    'https://refactoring.guru/design-patterns/decorator',
    'https://dev.to/elihood/implementing-a-decorator-design-pattern-within-react-gno',
    'https://medium.com/@mr.kashif.samman/flexible-and-maintainable-react-native-applications-with-the-decorator-pattern-32d84de576f6'
  ];
  // Define a component to be decorated
  const MyComponent = () => {
    return <p>This is the original component. All that lives in me a p tag. I was "decorated" with everything above me</p>;
  };

  // Define a decorator component
  const withDecorator = (WrappedComponent) => {
    const DecoratedComponent = (props) => {
      // Add additional functionality or modify props here
      return (
        <div className="border">
          <p><b> There is no "wrong" way to code, and lots of different approaches to achieve the same thing. That being said, this is the WRONG way to do a Decorator</b></p>
          <p>Technically, this way works. but in my expert opinion it can be harder to read, and there are easier ways to get this done that make the intent more clear.</p>
          <WrappedComponent {...props} />
        </div>
      );
    };
    return DecoratedComponent;
  };

  // Apply the decorator to the component
  const DecoratedComponent = withDecorator(MyComponent);

  return (
    <Container>
      <h1>Decorator Examples</h1>
      <p className="mt-4">
        <p>this is essentially just a high order component. pass in a baby compnont, and some extra deets to it, then send it off</p>
      </p>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Decorator Deets</Card.Title>
              <p>
                We have two different approaches here for the decorator pattern in React.
                The first is the wront way to do a decorator, and the second is the correct way to do a decorator. The first example isn't
                "wrong" persay, but it's not the best way to do it. The second example cleaner and easier to read. also more modern approach
              </p>
              <p>In the giphy example, we have the GiphyCard component that acts as a decorator. This component takes in a children prop (just a "node" that
                represents everything inside the component tags), and then displays it</p>
              <p> this is considered a "decorator" because it ADDS to the inner components passed in.  In general, this pattern makes for a consolidated "feel" to applications
                and can be a great way to add functionality to components without changing the original component
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
              <p>** the second link here is actually a cool example of how to use decorators in a more "functional" way.  It adds actual functions and state to the component rather than just UI features **</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h5>WRONG WAY TO DO A DECORATOR</h5>
      <DecoratedComponent />

      <h5 className="mt-2">CORRECT WAY TO DO A DECORATOR</h5>

      <Row className="mt-2">
        <Col sm={4}>
          <GiphyCard header="Beer Search">
            <BeerGiphy query="beer" isNaughty={false} />
          </GiphyCard>
        </Col>
        <Col sm={4}>
          <GiphyCard header="Work Search">
            <BeerGiphy query="busy" isNaughty={false} />
          </GiphyCard>
        </Col>
        <Col sm={4}>
          <GiphyCard header="Custom Search">
            <BeerGiphy isNaughty={false} />
          </GiphyCard>
        </Col>
      </Row>

      <h5 className="mt-2">one more way to decorate...</h5>
      <Row className="mt-2">
        <Col sm={4}>
          <GiphyCard header="Naughty Search">
            <BeerGiphy query="beer" isNaughty={true} />
          </GiphyCard>
        </Col>
      </Row>

    </Container>
  );
};

export default DecoratorPage;
