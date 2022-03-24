const fetchApi = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(endpoint);
  const json = await response.json();
  const data = json.results;
  return data;
};

export default fetchApi;
