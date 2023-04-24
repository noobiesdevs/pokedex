<template>
  <div class="wrapper">
    <header>
      <div class="headerComponents">
        <div class="searchBar">
          <div class="searchText">
            <input type="text" placeholder="Rechercher un Pokemon" />
          </div>
        </div>
        <div class="filter">
          <select name="filters" id="filtersList">
            <option value="Type">Type</option>
            <option value="Name">Name</option>
          </select>
        </div>
      </div>
    </header>
    <div class="topContainer">
      <div class="containerLeft">
        <div class="gridInfo">
          <div class="infoType"><img src="assets/type/grass.svg" alt="" /></div>
          <div class="infoName">
            <div class="infoTypeName">{{ type }}</div>
            <h1 class="infoPokemonName">Bulbizarre</h1>
          </div>
          <div class="infoStatName">
            <div>Taille</div>
            <div>Poid</div>
            <div>Compétence</div>
          </div>
          <div class="infoValue">
            <div>0.7M</div>
            <div>6.9Kg</div>
            <div>Overgrow</div>
          </div>
        </div>
      </div>
      <div class="containerRight">
        <img src="/assets/001.png" alt="" />
      </div>
    </div>
    <div class="bottomContainer">
      <div class="title">
        <h2>Stats</h2>
      </div>
      <div class="flexCol">
        <div class="flexLine">
          <div class="statName">Point de vie</div>
          <div class="statGraph">***</div>
          <div class="statValue">45</div>
        </div>
        <div class="flexLine">
          <div class="statName">Attaque</div>
          <div class="statGraph">****</div>
          <div class="statValue">49</div>
        </div>
        <div class="flexLine">
          <div class="statName">Défense</div>
          <div class="statGraph">****</div>
          <div class="statValue">49</div>
        </div>
        <div class="flexLine">
          <div class="statName">Attaque spécial</div>
          <div class="statGraph">******</div>
          <div class="statValue">65</div>
        </div>
        <div class="flexLine">
          <div class="statName">Défense spécial</div>
          <div class="statGraph">******</div>
          <div class="statValue">65</div>
        </div>
        <div class="flexLine">
          <div class="statName">Vitesse</div>
          <div class="statGraph">***</div>
          <div class="statValue">45</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const type = ref<string>("fire")
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
      index = id.value + 1
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
    tablePokemon.value.height = data.height / 10
    tablePokemon.value.weight = data.weight / 10
    console.log("data API", data);

    console.log("Variable tablePokemon", tablePokemon.value);

  } catch (error) {
    console.error(error)
  }
}

const pokemons = fetchPokemons()


watch(
  () => type.value,
  (newType, oldType) => {
    // Check if the code is running in a browser environment
    if (typeof window !== 'undefined') {
      if (oldType) {
        document.body.classList.remove(oldType + '-type');
      }
      document.body.classList.add(newType + '-type');
    }
  },
  { immediate: true }
);


</script> 

<style scoped>
  .wrapper {
    margin: 0 200px;
  }
  header {
    margin-bottom: 50px;
  }

  input {
    background-image: url(assets/icon/search.svg);
    background-position: calc(100% - 10px) 50%; /* première valeur permet de positionner l'image a droite - 10px, la deuxieme permet de centrer verticalement */
    background-repeat: no-repeat;
    background-size: 20px 20px;
    padding-right: 30px;
  }

  .title {
    color: white;
  }

  .flexLine {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .flexCol {
    display: flex;
    flex-direction: column;
    flex-basis: 70%;
    padding: 10px 0;
  }

  .headerComponents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0;
  }

  .topContainer {
    display: flex;
    margin: 80px 0;
  }

  .containerRight {
    flex-basis: 50%;
  }

  .containerLeft {
    flex-basis: 50%;
  }

  .title {
    flex-basis: 30%;
    text-align: right;
    align-self: center;
    padding: 0 50px 0 0;
  }

  .bottomContainer {
    display: flex;
    flex-direction: row;
    margin: 50px 0;
  }

  .statName {
    flex-basis: 25%;
  }

  .statGraph {
    flex-basis: 75%;
    text-align: left;
  }

  .statValue {
    flex-basis: 10%;
    text-align: center;
  }

  .gridInfo {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100% auto;
  }

  .infoName {
    grid-column: 2;
    grid-row: 1;
  }

  .infoStatName {
    grid-column: 1;
    grid-row: 2;
  }

  .infoValue {
    grid-column: 2;
    grid-row: 2;
    text-align: right;
  }

  .infoType {
    grid-column: 1;
    grid-row: 1;
  }

  .statGraph {
    align-self: left;
  }

  .infoPokemonName {
    text-transform: uppercase;
  }
</style>
