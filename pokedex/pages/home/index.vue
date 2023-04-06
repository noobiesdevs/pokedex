<template>
  <div v-for="n in tablePokemon">
    <cards-pokemon />
  </div>
</template>

<script lang="ts" setup>
  let result;
  let tablePokemon = [];
  
  function fetchPokemons() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
    .then(response => response.json())
    .then(data => {
      result = data;
      tablePokemon = data.results;

      return data;
    })
    .catch(error => console.error(error))
  }


  let pokemons = fetchPokemons();
  let test;
  let name;
  async function getPokemonName() {
    try {
      test = await pokemons
    } catch (error) {
      console.error(error);
    }
  }

getPokemonName().then(() => {
  tablePokemon = test.results
  for (let i=0; i < 5; i++) {
    name = test.results[i].name;
    console.log("name : " + name)
  }
})
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: space-between;
}
</style>
