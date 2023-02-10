<script>
  import Cards from "./cards.svelte";
  import fetchPokemons from '../api/getAllPokemon';
let pokemons;
fetchPokemons().then(data => {
  pokemons = [];
  for (let i = 0; i < data.results.length; i++) {
    pokemons.push(data.results[i].name);
  }
  return pokemons
});

console.log(pokemons);

</script>

<h1>Pokedex</h1>
<a href="/description">About</a>
<main class="wrapper">
  <script>  

    </script>
  <!-- {#each test as pokemon, i}
     <li>{i + 1}: {pokemon.name} x {pokemon.qty}</li>
  {/each} -->
  <Cards link="/description" />
  <Cards link="/description" />
  <Cards link="/description" />
  <Cards link="/description" />
  <Cards link="/description" />
</main>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
  }
</style>
