<template>
    <div>
        <h1>Pokedex</h1>
        <a href="/description">About</a>
        <main class="wrapper">
            <!-- {#each pokemons as pokemon}
                <Cards link="/description" pokemon_Name={pokemon.name} />
            {/each} -->
        </main>
    </div>
</template>

<script lang="TS" setup>

</script>


<style scoped>
    .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
  }
</style>

