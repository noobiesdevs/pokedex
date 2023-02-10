<script>
  import Cards from "./cards.svelte";
</script>

<h1>Pokedex</h1>
<a href="/description">About</a>
<main class="wrapper">
  <Cards link="/description"/>
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
