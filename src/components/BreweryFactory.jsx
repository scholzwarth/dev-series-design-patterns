import PropTypes from 'prop-types';
import { BreweryTypes } from '../constants/breweryType';
import BreweryCard from './BreweryCard';

const BreweryFactory = ({ brewery }) => {
  switch (brewery.brewery_type) {
    case BreweryTypes.MICRO:
      return <BreweryCard brewery={brewery} header="Microbrewery" className="micro" />;
    case BreweryTypes.BREWPUB:
      return <BreweryCard brewery={brewery} header="Brew Pub" className="brewpub" />;
    case BreweryTypes.REGIONAL:
      return <BreweryCard brewery={brewery} header="Regional Brewery" className="regional" />;
    default:
      return <BreweryCard brewery={brewery} header={`UNCONFIGURED: ${brewery.brewery_type}`} />;
  }
};

BreweryFactory.propTypes = {
  brewery: PropTypes.object.isRequired,
};

export default BreweryFactory;
