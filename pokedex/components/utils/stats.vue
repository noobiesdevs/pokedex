<template>
<div class="statParent">
    <div class="nameStat">
        {{ nameStat }}
    </div>
    <div class="progressBar">
        ***
    </div>
    <div class="numericValue">
        {{ value }}
    </div>

</div>

</template>

<script lang="ts" setup>

const props = defineProps({
  nameStat: {
    type: String,
    default: ""
  },
  value: {
    type: Number,
    default: 0
  }

});

</script>

<style scoped>

.statParent {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.nameStat {
  width: 25%;
}

</style>