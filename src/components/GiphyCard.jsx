import { Card, Button } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const GiphyCard = ({ header, children }) => {

  return (
    <Card >
      <Card.Header className="d-flex justify-content-between">
        <div>{header}</div>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
};

GiphyCard.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node,
};

export default GiphyCard;
