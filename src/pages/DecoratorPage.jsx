

const DecoratorPage = () => {
  // Define a component to be decorated
  const MyComponent = () => {
    return <p>This is the original component.</p>;
  };

  // Define a decorator component
  const withDecorator = (WrappedComponent) => {
    const DecoratedComponent = (props) => {
      // Add additional functionality or modify props here
      return (
        <div>
          <h1>Decorator Example</h1>
          <WrappedComponent {...props} />
        </div>
      );
    };
    return DecoratedComponent;
  };

  // Apply the decorator to the component
  const DecoratedComponent = withDecorator(MyComponent);

  const ButtonComponentHelper = ({ test, onClick, children }) => {
    return (
      <button onClick={onClick}>{children}</button>
    )
  }


  return (
    <div>
      <h1>Decorator Page</h1>
      <p>this is essentially just a high order component. pass in a baby compnont, and some extra deets to it, then send it off</p>
      <DecoratedComponent />
      <ButtonComponentHelper onClick={() => console.log('clicked!')}>
        Click Me!
      </ButtonComponentHelper>

    </div>
  );
};

export default DecoratorPage;
