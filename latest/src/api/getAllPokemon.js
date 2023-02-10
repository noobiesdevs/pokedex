const fetchPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
};

export default fetchPokemons;