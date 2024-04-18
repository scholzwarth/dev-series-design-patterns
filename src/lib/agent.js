import axios from 'axios';
import { toast } from 'react-toastify';

// a place to intercept errors and add toast notifications
axios.interceptors.response.use(async response => {
  return response;
}, error => {
  const { data, status } = error.response;

  switch (status) {
    case 400:
      console.error('400', data);
      // custom handler for when we return error messages we want to display
      if (data.errorMessage) {
        toast.error(data.errorMessage);
      } else {
        toast.error('An error occurred. If this persists, please refresh the page and try again.');
      }
      break;
    case 401:
      console.error('Unauthorized');
      break;
    case 403:
      console.error('Forbidden');
      break;
    case 404:
      console.error('Not found');
      break;
    case 500:
      console.error('500', data);
      toast.error('An error occurred. If this persists, please refresh the page and try again.');
      break;
    default:
      console.error('Unknown error', data);
      toast.error('An error occurred. If this persists, please refresh the page and try again.');
      break;
  }
  return Promise.reject(error);
});

const responseBody = response => response.data;

const requests = {
  get: (url, headers = {}) => axios.get(url, headers).then(responseBody),
  getRaw: (url, headers = {}) => axios.get(url, headers),
  post: (url, body = {}, headers = {}) => axios.post(url, body, headers).then(responseBody),
  postRaw: (url, body = {}, headers = {}) => axios.post(url, body, headers),
  put: (url, body = {}, headers) => axios.put(url, body, headers).then(responseBody),
  delete: (url, headers = {}) => axios.delete(url, headers).then(responseBody),
};

const breweries = {
  getRichmondBreweries: async () => requests.get('https://api.openbrewerydb.org/v1/breweries?by_city=richmond&by_state=virginia'),
  getHenricoBreweries: async () => requests.get('https://api.openbrewerydb.org/v1/breweries?by_city=henrico&by_state=virginia'),
};


const agent = {
  breweries
};

export default agent;