<template>

<section class="highSection">
  <div class="divIcon">

  </div>

  <div class="divHeader">
    <img :src="`../../_nuxt/assets/img/type/${tablePokemon.type}.svg`" height="30">
    <label class="typePokemon">{{ tablePokemon.type }}</label>
    <h1 class="pokemonName">{{ tablePokemon.name }}</h1>
  </div>

  <div class="divTitleStats">
    <ul>
      <li class="height">Height</li>
      <li class="weight">Weight</li>
      <li class="ability">Ability</li>
    </ul>
  </div>

  <div class="divStats">
    <ul>
      <li class="heightValue">{{ tablePokemon.height }} m</li>
      <li class="weightValue">{{ tablePokemon.weight }} kg</li>
      <li class="abilityValue"> {{ tablePokemon.ability }}</li>
    </ul>
      
  </div>
  
  <div class="divArtwork">
    <img class="artwork" :src="tablePokemon.sprite" alt="pokemon-artwork"/>
  </div>

</section>

<section class="bottomSection">
  <div class="stats">

  </div>
  <div class="headerStats">
    <ul>
      <li> <Stats nameStat="Hp" :value="tablePokemon.hp"/></li>
      <li> <Stats nameStat="Attack" :value="tablePokemon.attack"/></li>
      <li> <Stats nameStat="Defense" :value="tablePokemon.defense"/></li>
      <li> <Stats nameStat="Special-attack" :value="tablePokemon.specialAttack"/></li>
      <li> <Stats nameStat="Special-defense" :value="tablePokemon.specialDefense"/></li>
      <li> <Stats nameStat="Speed" :value="tablePokemon.speed"/></li>
    </ul>
  </div>
</section>


  
</template>

<script lang="ts" setup>
import Stats from '@/components/utils/stats.vue'
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
  sprite: '',
  type: ''

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


async function fetchPokemons() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const data = await response.json()
    tablePokemon.value.name = data.forms[0].name
    tablePokemon.value.height = data.height/10
    tablePokemon.value.weight = data.weight/10
    tablePokemon.value.ability = data.abilities[0].ability.name
    tablePokemon.value.hp = data.stats[0].base_stat
    tablePokemon.value.attack = data.stats[1].base_stat
    tablePokemon.value.defense = data.stats[2].base_stat
    tablePokemon.value.specialAttack = data.stats[3].base_stat
    tablePokemon.value.specialDefense = data.stats[4].base_stat
    tablePokemon.value.speed = data.stats[5].base_stat
    tablePokemon.value.sprite = data.sprites.other.dream_world.front_default
    tablePokemon.value.type = data.types[0].type.name

    document.body.className = "";
    document.body.classList.add(tablePokemon.value.type + '-type');
 
    
    
  } catch (error) {
    console.error(error)
  }
}

const pokemons = fetchPokemons()




</script> 

<style scoped>
.highSection {  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "divIcon divHeader divArtwork"
    "divTitleStats divStats divArtwork";
}

.divArtwork { grid-area: divArtwork; }

.divIcon { grid-area: divIcon; }

.divTitleStats { grid-area: divTitleStats; }

.divStats { grid-area: divStats; }

.divHeader { grid-area: divHeader; }

ul {
  list-style: none;
}


.typePokemon {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  color: white;
}

.pokemonName {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  color: white;
}
.divHeader {
  margin-top: 20px;
}

.height {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  color: white;
}

.weight {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  color: white;
}

.ability {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  color: white;
}

.heightValue {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  color: white;
}

.weightValue {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  color: white;
}

.abilityValue {
  font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  color: white;
}
</style>
