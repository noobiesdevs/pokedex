<template>
  <div class="cards">
    <figure>
      <img :src="tablePokemon.sprite" alt="name_pokemon" width="100" height="100" />
      <figcaption class="cards__caption">#{{ tablePokemon.id }}</figcaption>
    </figure>
    <h2 class="cards__title">{{ tablePokemon.name }}</h2>
    <p v-for="typePokemon in tablePokemon.type">{{ typePokemon.type.name }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: ""
  },
  index: {
    type: Number,
    default: 0
  }

});

// Formatage de l'index des pokemon
let indexLenght = ""
if (props.index < 10) {
  indexLenght = "00" + props.index
} else if (props.index < 100) {
  indexLenght = "0" + props.index
} else {
  indexLenght = props.index.toString()
}


interface Pokemon {
  name: string;
  url: string;
}

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
  sprite: '',
  type: ''

});

async function fetchPokemons() {
  try {
    const response = await fetch(`${props.url}`)
    const data = await response.json()
    tablePokemon.value.name = data.forms[0].name
    tablePokemon.value.type = data.types
    tablePokemon.value.id = data.id
    tablePokemon.value.sprite = data.sprites.other.dream_world.front_default
        
  } catch (error) {
    console.error(error)
  }
}

watch(
  () => props.url,
  () => {
    fetchPokemons()
  },
  { immediate: true }
)
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: space-between;
}

.cards__caption {
  color: gray;
}

.cards {
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
  display: inline-block;
  width: 10%;
}

.cards__type {
  padding: 2px 20px;
  border-radius: 4px;
}

.cards__title {
  padding: 2px 20px;
}

.card__type--feu {
  background-color: red;
}

.card__type--eau {
  background-color: blue;
}
</style>