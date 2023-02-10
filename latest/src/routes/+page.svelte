<script>
  import Cards from "./cards.svelte";
  import { fetchPokemons } from "../api/getAllPokemon";
  import { onMount } from "svelte";
  let pokemons = [""];
  onMount(async () => {
    const allPokemon = await fetchPokemons();
    pokemons = allPokemon.results;
  });

  console.log("poke", pokemons);
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
