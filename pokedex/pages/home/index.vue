<template>
    <NuxtLink v-for="(pokemon, i) in tablePokemon" :key="i" :to="'/description/'+i">
        <cards-pokemon :name="pokemon.name" :url="pokemon.url" :index="i+1"/>
    </NuxtLink>
</template>

<script lang="ts" setup>

// >===============
// Permet de bien définir la tablePokemon afin d'enlever les erreures de typage

interface Pokemon {
    name: string;
    url: string;
}

let tablePokemon = ref<Pokemon[]>([]);

async function fetchPokemons() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
        const data = await response.json();
        tablePokemon.value = data.results;        
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
