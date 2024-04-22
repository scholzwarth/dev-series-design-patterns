import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import useBeerStore from '../stores/beerStore';

const BreweryCard = ({ brewery, header, className }) => {
  const [isInMyBreweries, setIsInMyBreweries] = useState(false);
  const addBreweryToMyBreweries = useBeerStore(state => state.addBreweryToMyBreweries);
  const myBreweries = useBeerStore(state => state.myBreweries);
  const removeBreweryFromMyBreweries = useBeerStore(state => state.removeBreweryFromMyBreweries);

  useEffect(() => {
    setIsInMyBreweries(myBreweries.some(b => b.id === brewery.id));
  }, [myBreweries, brewery.id]);


  return (
    <Card className={`${className}`}>
      <Card.Header className="d-flex justify-content-between">
        <div>{header}</div>
        {isInMyBreweries ? (
          <Button
            onClick={() => removeBreweryFromMyBreweries(brewery)}
          >
            Remove from My Breweries
          </Button>
        ) : (
          <Button
            onClick={() => addBreweryToMyBreweries(brewery)}
          >
            Add to My Breweries
          </Button>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title>{brewery.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{brewery.city}, {brewery.state}</Card.Subtitle>
        <Card.Text>
          {brewery.street}
          <br />
          {brewery.phone}
          <br />
          lat: {brewery.latitude ?? 'n/a'}, long: {brewery.longitude ?? 'n/a'}
        </Card.Text>
        <Card.Link href={brewery.website_url} target="_blank" rel="noreferrer noopener">
          Visit website
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

BreweryCard.propTypes = {
  brewery: PropTypes.object.isRequired,
  header: PropTypes.string,
  className: PropTypes.string,
};

export default BreweryCard;
