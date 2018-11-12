<template lang="html">
  <div id ="skills">
    <h2 class="title"> My skills </h2>
    <div class="container--grid box--center">
      <description/>
    </div>
    <div class="container--grid box--center">
      <icon class="flex" v-for="icon in icons"
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
import description from './description.vue'
import skillset from './skillset.json'

export default {
  components: {
    icon,
    description,
  },
  data:() => ({
    icons: skillset
  })
}
</script>

<style lang="scss">
.container--grid {
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 100px;
  // margin: 0 auto;
  // width: 65vw;
  justify-content: center;
  #skill-icon {
    margin: 1em;
  }
}
</style>
