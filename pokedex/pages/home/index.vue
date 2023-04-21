<template>
    <div v-for="(pokemon, i) in tablePokemon" :key="i">
        <cards-pokemon :name="pokemon.name" :url="pokemon.url" :index="i+1"/>
    </div>
</template>

<script lang="ts" setup>

// >===============
// Permet de bien définir la tablePokemon afin d'enlever les erreures de typage

interface Pokemon {
    name: string;
    url: string;
}

let tablePokemon = ref<Pokemon[]>([]);
// <===============
// let tablePokemon = ref([]);

async function fetchPokemons() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25');
        const data = await response.json();
        tablePokemon.value = data.results;
        console.log(tablePokemon.value);
        
    } catch (error) {
        console.error(error);
    }
}

let pokemons = fetchPokemons();
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
}
</style>
