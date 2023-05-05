<template>
    <div>
      <input v-model="searchPokemon" type="search" name="searchPokemon" placeholder="Search pokemon">
    </div>
    <NuxtLink v-for="(pokemon, i) in result" :key="i" :to="'/description/' + i">
      <cards-pokemon :name="pokemon.name" :url="pokemon.url" :type="type" />
    </NuxtLink>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue';
  
  interface Pokemon {
    name: string;
    url: string;
  }
  
  let tablePokemon = ref<Pokemon[]>([]);
  let result = ref<Pokemon[]>([]);
  
  async function fetchPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
      const data = await response.json();
      tablePokemon.value = data.results;
      result.value = data.results;
    } catch (error) {
      console.error(error);
    }
  }
  
  let pokemons = fetchPokemons();
  
  const type = ref<string>('');
  const searchPokemon = ref<string>('');
  
  watch(searchPokemon, (newValue) => {
    if (newValue === '') {
      result.value = tablePokemon.value;
    } else {
      result.value = tablePokemon.value.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(newValue.toLowerCase())
      );
    }
  });
  </script>
  

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
}
</style>




newValue 
index.vue:63 table result RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: Promise, _value: Promise}

newValue 
index.vue:63 table result RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: Promise, _value: Promise}