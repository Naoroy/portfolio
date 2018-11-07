<template lang="html">
  <div id="skill-icon">
    <img class="icon" :src="url || '#'" :alt="name">
    <div class="bar">
      <div class="progression"></div>
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
}
</script>

<style lang="scss">
  #skill-icon {
    width: 100px;
    height: 100px;
    background: #F55;
    .icon {
      width: 80%;
      font-weight: 900;
    }
    .bar {
      background: #D99;
      height: 1em;
      width: 100%;
      border: solid 1px black;
      .progression {
        background: #A33;
        height: 100%;
        width: 80%;
      }
    }
  }
</style>
