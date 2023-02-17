let result;

const fetchPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
    .then(response => response.json())
    .then(data => {
      result= data;
      return data;
    })
    .catch(error => console.error(error));
};

export { fetchPokemons };
