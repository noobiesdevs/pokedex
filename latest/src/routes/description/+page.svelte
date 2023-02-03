<script></script>

<body />
<div class="wrapper">
  <header>
    <div class="headerComponents">
      <div class="searchBar">
        <div class="searchText">
          <input  type="text" value="..." />
          <div class="searchImage">test</div>
        </div>
      </div>
      <div class="filter">
        <select name="filters" id="filtersList">
          <option value="Type">Type</option>
          <option value="Name">Name</option>
        </select>
      </div>
    </div>
    
    <div class="carrouselName" />
  </header>
  <div class="topContainer">
    <div class="containerleft" />
      <div class="gridInfo">
        <div class="infoType"><img src="" alt=""></div>
        <div class="infoName">
          <div class="infoTypeName">Herbe</div>
          <div class="infoPokemonName">Bulbizarre</div>
        </div>
        <div class="statName">
          <div>Taille</div>
          <div>Poid</div>
          <div>Compétence</div>
        </div>
        <div class="statValue">
          <div>0.7M</div>
          <div>6.9Kg</div>
          <div>Overgrow</div>
        </div>
      </div>
    <div class="containerRight" />
      <img src="" alt="">
  </div>
  <div class="bottomContainer">
    <div class="title">
      <h2>Stats</h2>
    </div>
    <div class="flexLine">
      <div class="flexCol">
        <div class="statName">Point de vie</div>
        <div class="statGraph">***</div>
        <div class="statValue">45</div>
      </div>
      <div class="flexCol">
        <div class="statName">Attaque</div>
        <div class="statGraph">****</div>
        <div class="statValue">49</div>
      </div>
      <div class="flexCol">
        <div class="statName">Défense</div>
        <div class="statGraph">****</div>
        <div class="statValue">49</div>
      </div>
      <div class="flexCol">
        <div class="statName">Attaque spécial</div>
        <div class="statGraph">******</div>
        <div class="statValue">65</div>
      </div>
      <div class="flexCol">
        <div class="statName">Défense spécial</div>
        <div class="statGraph">******</div>
        <div class="statValue">65</div>
      </div>
      <div class="flexCol">
        <div class="statName">Vitesse</div>
        <div class="statGraph">***</div>
        <div class="statValue">45</div>
      </div>
    </div>
  </div>
</div>

<style>
  body {
    background-color: #32a852;
  }
  .wrapper {
    margin: 0 200px;
  }
  /* .searchText {
    padding-left: 30px;
    position: relative;
  }
  .searchImage {
    background: url("assets/icon/search.svg") no-repeat scroll 2px 2px;
    position: absolute;
    top: -10px;
    right: 50px;
    z-index: 5;
    width: 50px;
    height: auto;
  } */
  .title {
    color: white;
  }

  .flexLine {
    display: flex;
    flex-direction: row;
  }

  .flexCol {
    display: flex;
    flex-direction: column;
  }

  .headerComponents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>
