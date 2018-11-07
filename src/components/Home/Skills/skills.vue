<template lang="html">
  <div id ="resume">
    <h2 class="title"> My skills </h2>
    <div class="container--grid">
      <icon v-for="icon in icons"
        :key="icon.name"
        :name="icon.name"
        :url="icon.url"
        :progression="icon.progression"
      />
    </div>
  </div>
</template>

<script>
import icon from './icon.vue'
import skillset from './skillset.json'

export default {
  components: {
    icon,
  },
  data:() => ({
    icons: skillset
  })
}
</script>

<style lang="scss">
.container--grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  margin: 10vh auto;
  width: 65vw;
}
</style>
