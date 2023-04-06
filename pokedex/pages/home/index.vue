<template>
  <div v-for="n in tablePokemon">
    <cards-pokemon :name ="test"/>
  </div>
</template>

<script lang="ts" setup>
  let result;
  let tablePokemon = ref([]);
  
 async function fetchPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25');
    const data = await response.json();
    tablePokemon.value = data.results;
    console.log("value : " + tablePokemon.value[3].name)
  } catch (error) {
    console.error(error);
  }
}

 let test = "coucou"
  let pokemons = fetchPokemons();
  let name;
  async function getPokemonName() {
    try {
      test = await pokemons
    } catch (error) {
      console.error(error);
    }
  }

  console.log("table : " + tablePokemon.value[3].name);
  
// getPokemonName().then(() => {
//   tablePokemon = test.results
//   for (let i=0; i < 5; i++) {
//     name = test.results[i].name;
//     console.log("name : " + name)
//   }
// })
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: space-between;
}
</style>
