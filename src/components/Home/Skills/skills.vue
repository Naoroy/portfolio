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

export default {
  components: {
    icon,
  },
  data:() => ({
    icons: [
      {
        name:'JS',
        url: 'https://i2.wp.com/redstart.fr/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1',
        progression: 100,
      },
      {
        name:'JS',
        url: '',
        progression: 100,
      },
      {
        name:'JS',
        url: '',
        progression: 100,
      },
      {
        name:'JS',
        url: '',
        progression: 100,
      },
      {
        name:'JS',
        url: '',
        progression: 100,
      },
      {
        name:'JS',
        url: '',
        progression: 100,
      },
    ]
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
