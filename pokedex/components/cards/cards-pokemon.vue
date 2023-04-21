<template>
  <a href='{link}'>
    <div class="cards">
      <figure>
        <img src="../../assets/img/pokemon/001.png" alt="name_pokemon" />
        <figcaption class="cards__caption">#{{ indexLenght }}</figcaption>
      </figure>
      <h2 class="cards__title">{{ name }}</h2>
      <p>{{ url }}</p>
      <span class="cards__type">type</span>
    </div>
  </a>
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