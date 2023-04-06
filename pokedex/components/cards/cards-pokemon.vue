<template>
<a href='{link}'>
  <div class="cards">
    <figure>
      <img src="../../assets/img/pokemon/001.png" alt="name_pokemon" />
      <figcaption class="cards__caption">#xxx</figcaption>
    </figure>
    <h2 class="cards__title">{pokemon_Name}</h2 >
    <span class="cards__type">type</span>
  </div>
</a>
</template>

<script setup lang='ts'>
//   let result;
//   let tablePokemon = [];
//   function fetchPokemons() {
//     return fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
//     .then(response => response.json())
//     .then(data => {
//       result = data;
//       tablePokemon = data.results;

//       return data;
//     })
//     .catch(error => console.error(error))
//   }


//   let pokemons = fetchPokemons();
//   let test;
//   async function getPokemonName() {
//     try {
//       test = await pokemons
//     } catch (error) {
//       console.error(error);
//     }
//   }

// getPokemonName().then(() => {
//   for (let i=0; i < 5; i++) {
//     let name = test.results[i].name;
//     console.log("name : " + name)
//   }
// })


  // for (let index = 0; index < tablePokemon.length; index++) {
  //   let name = tablePokemon[index].name;
  //   console.log(name);
  // }

  
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
    color: grey;
  }

  .cards {
    margin: 10px;
    padding-bottom: 10px;
    border: 1px solid black;
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