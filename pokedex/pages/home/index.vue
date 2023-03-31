<template>
    <div  v-for="n in 10">
        <cards-pokemon/>
    </div>
</template>

<script lang="TS" setup>

</script>


<style scoped>
    .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    justify-content: space-between;
  }
</style>

