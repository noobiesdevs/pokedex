<template>
    <div v-for="(pokemon, i) in tablePokemon">
        <cards-pokemon :name="namePokemon[i]" :url="urlPokemon[i]" />
    </div>
</template>

<script lang="ts" setup>
let tablePokemon = ref([]);
let namePokemon = [];
let urlPokemon = [];
async function fetchPokemons() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25');
        const data = await response.json();
        tablePokemon.value = data.results;

        for (let i = 0; i < tablePokemon.value.length; i++) {
            namePokemon[i] = tablePokemon.value[i].name;
            urlPokemon[i] = tablePokemon.value[i].url;
        }

        console.log(urlPokemon);


    } catch (error) {
        console.error(error);
    }
}

let test = "coucou"
let pokemons = fetchPokemons();




</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
}
</style>
