<script>
  import Cards from "./cards.svelte";
</script>

<h1>Pokedex</h1>
<main class="wrapper">
  <Cards />
  <Cards />
  <Cards />
  <Cards />
  <Cards />
</main>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
  }
</style>
