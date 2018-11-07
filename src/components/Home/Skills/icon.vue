<template lang="html">
  <div id="skill-icon">
    <img class="icon" :src="url || '#'" :alt="name+' icon'">
    <h3>{{ name }}</h3>
    <div class="bar">
      <div class="progression" :style="progressBarwidth"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'name': String,
    'url': String,
    'progression': Number,
  },
  data: () => ({

  }),
  computed: {
    progressBarwidth() {
      return `width: ${ this.progression }%`
    }
  }
}
</script>

<style lang="scss">
  #skill-icon {
    width: 100px;
    height: 100px;

    .icon {
      width: 50%;
      font-weight: 900;
    }
    .bar {
      background: #D99;
      height: 1em;
      width: 100%;
      border: solid 1px #555;
      .progression {
        background: #D55;
        border-right: solid 1px #555;
        height: 100%;
        // width: 80%;
      }
    }
  }
</style>
