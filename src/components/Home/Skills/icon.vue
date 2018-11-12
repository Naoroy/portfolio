<template lang="html">
  <div id="skill-icon">
    <!-- <h3>{{ name }}</h3> -->
    <img class="icon" :src="url || '#'" :alt="name + ' logo'">
    <!-- <div class="bar">
      <div class="progression" :style="progressBarwidth"></div>
    </div> -->
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 10em;
    position: relative;
    .icon {
      width: 50%;
      font-weight: 900;
    }
    .bar {
      position: absolute;
      bottom: 0;
      background: #D99;
      height: 1em;
      width: 100%;
      border: solid 1px #555;
      .progression {
        background: #D55;
        border-right: solid 1px #555;
        height: 100%;
      }
    }
  }
</style>
