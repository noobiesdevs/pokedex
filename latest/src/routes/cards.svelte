<script>

  export let link = '';

</script>

<a href='{link}'>
  <div class="cards">
    <figure>
      <img src="/assets/001.png" alt="name_pokemon" />
      <figcaption class="cards__caption">#xxx</figcaption>
    </figure>
    <h2 class="cards__title">name_pokemon</h2>
    <span class="cards__type">type</span>
  </div>
</a>

<style>
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
