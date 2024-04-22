import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import beerStore from '../stores/beerStore';

const Map = ({ children }) => {
  const setContainer = beerStore((state) => state.setMapContainer);
  const myBreweries = beerStore((state) => state.myBreweries);
  const addBeerGraphic = beerStore((state) => state.addBeerGraphic);
  const clearAllGraphics = beerStore((state) => state.clearAllGraphics);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      setContainer(mapRef.current);
      if (myBreweries.length) {
        clearAllGraphics();
        myBreweries.forEach((brewery) => {
          addBeerGraphic(brewery);
        });
      }
    }
  }, [setContainer]);

  return (
    <div
      style={{
        width: '600px',
        height: '400px',
        minHeight: '200px',
      }}
      ref={mapRef}
    >
      {children}
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.node,
};

export default Map;
