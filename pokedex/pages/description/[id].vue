<template>
  {{ tablePokemon.name }}
  {{ tablePokemon.height }}m
  {{ tablePokemon.weight }}kg
  {{ tablePokemon.weight }}kg
</template>

<script lang="ts" setup>

const route = useRoute()
const id = ref<number>(0)
let index
interface Pokemon {
  name: string;
  height: number;
  weight: number;
  ability: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  sprite: string;
}

let tablePokemon = ref<Pokemon>({ 
  name: '',
  height: 0,
  weight: 0,
  ability: '',
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
  sprite: ''
});


watch(
  () => route.params,
  (params) => {
    if (params.id) {
      id.value = parseInt(params.id)
      index=id.value+1
    }
  },
  { immediate: true }
)

console.log(index);

async function fetchPokemons() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const data = await response.json()
    tablePokemon.value.name = data.forms[0].name
    tablePokemon.value.height = data.height/10
    tablePokemon.value.weight = data.weight/10
    console.log("data API", data);
    
    console.log("Variable tablePokemon", tablePokemon.value);
    
  } catch (error) {
    console.error(error)
  }
}

const pokemons = fetchPokemons()

</script> 

<style scoped>
</style>
