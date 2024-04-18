
import React, { useState, useEffect } from 'react';

// Define the Subject component
const Subject = () => {
  const [count, setCount] = useState(0);

  // Create a list of observers
  const observers = [];

  // Function to subscribe an observer
  const subscribe = (observer) => {
    observers.push(observer);
  };

  // Function to unsubscribe an observer
  const unsubscribe = (observer) => {
    const index = observers.indexOf(observer);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  };

  // Function to notify all observers
  const notifyObservers = () => {
    observers.forEach((observer) => observer(count));
  };

  // Function to update the count and notify observers
  const updateCount = (newCount) => {
    setCount(newCount);
    notifyObservers();
  };

  // Subscribe and unsubscribe observers on component mount and unmount
  useEffect(() => {
    return () => {
      observers.length = 0;
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => updateCount(count + 1)}>Increment</button>
      <button onClick={() => updateCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Define the Observer component
const Observer = ({ subject }) => {
  const [count, setCount] = useState(0);

  // Function to update the count when notified by the subject
  const updateCount = (newCount) => {
    setCount(newCount);
  };

  // Subscribe and unsubscribe to the subject on component mount and unmount
  useEffect(() => {
    subject.subscribe(updateCount);
    return () => {
      subject.unsubscribe(updateCount);
    };
  }, [subject]);

  return <h2>Observer Count: {count}</h2>;
};

// Define the ObserverPage component
const ObserverPage = () => {
  const subject = useState(null)[0];

  return (
    <div>
      <h1>Observer Design Pattern Example</h1>
      {/* <Subject ref={subject} />
      <Observer subject={subject} /> */}

    </div>
  );
};

export default ObserverPage;
