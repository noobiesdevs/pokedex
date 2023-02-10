const fetchPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=1279')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => console.error(error));
};

export { fetchPokemons };
