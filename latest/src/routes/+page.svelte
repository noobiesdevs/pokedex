<script>
  import Cards from "./cards.svelte";
  import { fetchPokemons } from "../api/getAllPokemon";
  import { onMount } from "svelte";
  let pokemons = [""];
  let arrayPokemon = [];
  let typePokemon = "";

  onMount(async () => {
    const allPokemon = await fetchPokemons();
    pokemons = allPokemon.results;

    pokemons.forEach((pokemon) => {
      let url = pokemon.url;
      fetch(url)
        .then((response) => response.json())
        .then((apiPokemon) => {
          let urlType = apiPokemon.types[0].type.url;
          fetch(urlType)
            .then((response) => response.json())
            .then((apiType) => {
              typePokemon = apiType.names[3].name;
              console.log('names',apiType.names);
              const infoPokemon = {
                id: apiPokemon.id,
                name: apiPokemon.name,
                weight: apiPokemon.weight,
                type: typePokemon,
              };
              console.log("data", apiPokemon);
              arrayPokemon.push(infoPokemon);
            });
          // Créer un nouvel objet infoPokemon pour chaque Pokémon

          return arrayPokemon;
        })

        .catch((error) => console.error(error));
    });
  });

  console.log("arrayPokemon", arrayPokemon);
</script>

<h1>Pokedex</h1>
<a href="/description">About</a>
<main class="wrapper">
  {#each pokemons as pokemon}
    <Cards link="/description" pokemon_Name={pokemon.name} />
  {/each}
</main>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
  }
</style>
