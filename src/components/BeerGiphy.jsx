import { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Magic } from 'react-bootstrap-icons';
import agent from '../lib/agent';
import withNaughtyGiph from './withNaughtyGiph';

const BeerGiphy = ({ query }) => {
  const [giphy, setGiphy] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await agent.giphy.search(query);
      var index = Math.floor(Math.random() * response.data.length);
      setGiphy(response.data[index].embed_url);
    }

    if (!giphy && query)
      fetchData();
  }, [giphy, query]);

  const searchGiphy = async () => {
    if (query) {
      const response = await agent.giphy.search(query);
      var index = Math.floor(Math.random() * response.data.length);
      setGiphy(response.data[index].embed_url);
    } else {
      setGiphy("https://giphy.com/embed/13aSSyJaI5NkTm");
    }
  }



  return (
    <>
      <Card.Title className="d-flex justify-content-between">
        {!query && <Form.Control type="text" placeholder="Search Giphy" onChange={() => setGiphy(null)} />}
        <Button onClick={() => searchGiphy()}><Magic size={30} /></Button>
      </Card.Title>
      {giphy && <iframe src={giphy} alt="giphy" style={{ minWidth: '200px', minHeight: '300px' }} />}

    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withNaughtyGiph(BeerGiphy);
